import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { issueClusters, type IssueCard } from "@/data/issueClusters";
import { ShieldCheck } from "lucide-react";

interface IssueClustersProps {
  onSelect: (issue: IssueCard) => void;
}

const riskColors: Record<IssueCard["riskLevel"], string> = {
  Low: "bg-green-100 text-green-800 border-green-200",
  Moderate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  High: "bg-red-100 text-red-800 border-red-200",
};

export function IssueClusters({ onSelect }: IssueClustersProps) {
  return (
    <section aria-label="Select a home issue">
      <Accordion type="single" collapsible className="w-full space-y-2">
        {issueClusters.map((cluster, idx) => (
          <AccordionItem key={idx} value={`cluster-${idx}`} className="rounded-lg border bg-card">
            <AccordionTrigger className="px-4 text-left font-semibold hover:no-underline">
              {cluster.name}
              <Badge variant="secondary" className="ml-auto mr-2 text-xs">
                {cluster.issues.length} issues
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div
                className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                role="listbox"
                aria-label={`Issues in ${cluster.name}`}
              >
                {cluster.issues.map((issue) => (
                  <Card
                    key={issue.id}
                    role="option"
                    aria-label={issue.title}
                    className="flex flex-col justify-between"
                  >
                    <CardContent className="flex flex-col gap-2 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold leading-tight text-foreground">
                          {issue.title}
                        </h3>
                        <Badge className={`shrink-0 text-[10px] ${riskColors[issue.riskLevel]}`}>
                          {issue.riskLevel}
                        </Badge>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {issue.snippet}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-auto w-full"
                        onClick={() => onSelect(issue)}
                        aria-label={`Select ${issue.title}`}
                      >
                        Select Issue
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-4">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          Some home damage events may qualify for homeowners insurance coverage.
          We'll help identify if this might apply.
        </p>
      </div>
    </section>
  );
}
