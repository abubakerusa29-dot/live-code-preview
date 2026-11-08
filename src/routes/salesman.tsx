import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { AppShell, Badge, Card, PrimaryButton, pageHead } from "@/components/aankh/AppShell";
import { visits } from "@/lib/demo-data";

export const Route = createFileRoute("/salesman")({
  head: () => pageHead("Salesman", "A salesman's day in Aankh: route, shop visits, orders and collections."),
  component: Salesman,
});

function Salesman() {
  return (
    <AppShell title="My day — Imran Ali" subtitle="Route: Saddar → Clifton → Gulshan → Nazimabad"
      actions={<PrimaryButton>Mark attendance</PrimaryButton>}>
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Card><p className="text-sm text-muted-foreground">Visits planned</p><p className="mt-1 text-2xl font-bold">{visits.length}</p></Card>
        <Card><p className="text-sm text-muted-foreground">Orders taken</p><p className="mt-1 text-2xl font-bold">1</p></Card>
        <Card><p className="text-sm text-muted-foreground">Collected</p><p className="mt-1 text-2xl font-bold">Rs 9,800</p></Card>
      </div>
      <Card>
        <h2 className="font-semibold">Today's visits</h2>
        <ul className="mt-3 divide-y divide-border">
          {visits.map((v) => (
            <li key={v.shop} className="flex items-center gap-3 py-3 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <div className="flex-1"><p className="font-medium">{v.shop}</p><p className="text-xs text-muted-foreground">{v.area} · {v.time}</p></div>
              <Badge>{v.result}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </AppShell>
  );
}
