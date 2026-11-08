import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Badge, Card, pageHead } from "@/components/aankh/AppShell";
import { team } from "@/lib/demo-data";

export const Route = createFileRoute("/manager")({
  head: () => pageHead("Manager", "Track your field team's visits, targets and attendance in Aankh."),
  component: Manager,
});

function Manager() {
  return (
    <AppShell title="Field team" subtitle="Live status of your sales team today.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {team.map((m) => (
          <Card key={m.name}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-semibold text-accent-foreground">{m.name[0]}</div>
              <div><p className="font-semibold">{m.name}</p><p className="text-xs text-muted-foreground">{m.role}</p></div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm"><span className="text-muted-foreground">Visits today</span><span className="font-semibold">{m.visits}</span></div>
            <div className="mt-2 text-sm text-muted-foreground">Monthly target {m.target}%</div>
            <div className="mt-1 h-2 rounded-full bg-muted"><div className="h-2 rounded-full bg-primary" style={{ width: `${m.target}%` }} /></div>
            <div className="mt-4"><Badge>{m.status}</Badge></div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
