
-- Fix overly permissive leads INSERT policy
DROP POLICY "Anyone can insert leads" ON public.leads;
CREATE POLICY "Authenticated or anon can insert leads" ON public.leads FOR INSERT WITH CHECK (
  user_id IS NULL OR auth.uid() = user_id
);
