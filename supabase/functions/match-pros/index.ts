import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Pro scoring weights
const WEIGHTS = {
  geo_match: 0.25,
  specialty_match: 0.25,
  rating: 0.20,
  response_speed: 0.15,
  license_verified: 0.15,
};

function scorePro(pro: any, zip: string, specialty: string, isCritical: boolean) {
  const geoScore = pro.zip_codes.includes(zip) ? 100 : 0;
  const specScore = pro.specialties.includes(specialty) ? 100 : (pro.specialties.length > 2 ? 40 : 0);
  const ratingScore = (pro.rating / 5) * 100;
  const speedScore = Math.max(0, 100 - (pro.response_speed_hours * 2));
  const licenseScore = pro.license_verified ? 100 : 0;

  let score = 
    geoScore * WEIGHTS.geo_match +
    specScore * WEIGHTS.specialty_match +
    ratingScore * WEIGHTS.rating +
    speedScore * WEIGHTS.response_speed +
    licenseScore * WEIGHTS.license_verified;

  // Critical risk: only licensed + insured pros
  if (isCritical && (!pro.license_verified || !pro.insured)) {
    score = 0;
  }

  return Math.round(score);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const body = await req.json();
    const { zip, specialty, risk_level } = body;
    const isCritical = risk_level === "Critical" || risk_level === "High";

    const { data: contractors, error } = await supabase
      .from("contractors")
      .select("*")
      .eq("active", true);

    if (error) throw error;

    const scored = (contractors || [])
      .map((pro: any) => ({
        ...pro,
        match_score: scorePro(pro, zip || "", specialty || "", isCritical),
      }))
      .filter((p: any) => p.match_score > 0)
      .sort((a: any, b: any) => b.match_score - a.match_score)
      .slice(0, 3);

    return new Response(JSON.stringify({ pros: scored }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (_error) {
    return new Response(
      JSON.stringify({ error: "Matching failed", pros: [] }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
