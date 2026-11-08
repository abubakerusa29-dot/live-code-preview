import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AppShell, Badge, Card, PrimaryButton, pageHead } from "@/components/aankh/AppShell";
import { invoices, kpis, products, rs, weeklySales } from "@/lib/demo-data";

export const Route = createFileRoute("/")({
  head: () => pageHead("Dashboard", "Aankh owner dashboard: today's sales, cash, credit and stock at a glance."),
  component: Dashboard,
});

const toneClass = { success: "text-success", neutral: "text-muted-foreground", warning: "text-warning", danger: "text-destructive" };

function Dashboard() {
  const max = Math.max(...weeklySales.map((d) => d.value));
  return (
    <AppShell title="Assalam-o-Alaikum, Abubaker" subtitle="Here's how your business is doing today."
      actions={<Link to="/sales"><PrimaryButton><Plus className="h-4 w-4" /> New sale</PrimaryButton></Link>}>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label}>
            <p className="text-sm text-muted-foreground">{k.label}</p>
            <p className="mt-2 text-2xl font-bold">{k.value}</p>
            <p className={`mt-1 text-xs font-medium ${toneClass[k.tone]}`}>{k.change}</p>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="font-semibold">Sales this week</h2>
          <p className="text-xs text-muted-foreground">In thousands of rupees</p>
          <div className="mt-6 flex h-48 items-end gap-3">
            {weeklySales.map((d) => (
              <div key={d.day} className="flex h-full flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-1 items-end">
                  <div className="w-full rounded-t-md bg-primary" style={{ height: `${(d.value / max) * 100}%` }} />
                </div>
                <span className="text-xs text-muted-foreground">{d.day}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="font-semibold">Low stock</h2>
          <ul className="mt-4 space-y-3">
            {products.filter((p) => p.stock < p.reorder).map((p) => (
              <li key={p.sku} className="flex items-center justify-between text-sm">
                <span>{p.name}</span><span className="font-semibold text-destructive">{p.stock} left</span>
              </li>
            ))}
          </ul>
          <Link to="/products" className="mt-4 inline-block text-sm font-semibold text-primary">View inventory →</Link>
        </Card>
      </div>

      <Card className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Recent invoices</h2>
          <Link to="/sales" className="text-sm font-semibold text-primary">All sales →</Link>
        </div>
        <ul className="mt-3 divide-y divide-border">
          {invoices.slice(0, 5).map((i) => (
            <li key={i.no} className="flex items-center justify-between py-3 text-sm">
              <div><p className="font-medium">{i.customer}</p><p className="text-xs text-muted-foreground">{i.no} · {i.date}</p></div>
              <div className="flex items-center gap-3"><span className="font-semibold">{rs(i.amount)}</span><Badge>{i.status}</Badge></div>
            </li>
          ))}
        </ul>
      </Card>
    </AppShell>
  );
}
