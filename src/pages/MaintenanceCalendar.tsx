import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { Snowflake, Flower2, Sun, Leaf } from "lucide-react";

const seasons = [
  {
    name: "Spring",
    icon: Flower2,
    months: "March – May",
    tasks: [
      "Inspect roof for winter damage",
      "Clean gutters and downspouts",
      "Service HVAC system (AC tune-up)",
      "Check exterior caulking and paint",
      "Test sump pump",
      "Inspect deck for rot or loose boards",
    ],
  },
  {
    name: "Summer",
    icon: Sun,
    months: "June – August",
    tasks: [
      "Seal or stain deck",
      "Clean and inspect dryer vent",
      "Check window and door screens",
      "Inspect foundation for cracks",
      "Trim trees and bushes away from house",
      "Deep clean kitchen exhaust fan",
    ],
  },
  {
    name: "Fall",
    icon: Leaf,
    months: "September – November",
    tasks: [
      "Clean gutters after leaves fall",
      "Service furnace / heating system",
      "Seal gaps around windows and doors",
      "Drain and store garden hoses",
      "Test smoke and CO detectors",
      "Insulate exposed pipes",
    ],
  },
  {
    name: "Winter",
    icon: Snowflake,
    months: "December – February",
    tasks: [
      "Check for ice dams on roof",
      "Monitor indoor humidity levels",
      "Inspect attic insulation",
      "Test GFCI outlets",
      "Check for drafts around windows",
      "Reverse ceiling fan direction",
    ],
  },
];

export default function MaintenanceCalendar() {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Home Maintenance Calendar
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-center text-muted-foreground">
            Stay ahead of costly repairs with seasonal maintenance tasks. Subscribe to get reminders.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {seasons.map((season) => (
              <Card key={season.name} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-serif text-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <season.icon className="h-5 w-5 text-primary" />
                    </div>
                    {season.name}
                    <Badge variant="outline" className="ml-auto font-normal">{season.months}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {season.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCapture variant="banner" />
    </Layout>
  );
}
