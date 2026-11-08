import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AppShell, PrimaryButton, Table, pageHead } from "@/components/aankh/AppShell";
import { customers, rs } from "@/lib/demo-data";

export const Route = createFileRoute("/customers")({
  head: () => pageHead("Customers & Credit", "Customer list, credit limits and outstanding balances in Aankh."),
  component: Customers,
});

function Customers() {
  return (
    <AppShell title="Customers & Credit" subtitle="Who owes you, and how close they are to their limit."
      actions={<PrimaryButton><Plus className="h-4 w-4" /> Add customer</PrimaryButton>}>
      <Table head={["Customer", "Phone", "City", "Balance", "Credit used"]}
        rows={customers.map((c) => {
          const pct = Math.round((c.balance / c.limit) * 100);
          return [<span className="font-medium">{c.name}</span>, c.phone, c.city, rs(c.balance),
            <div className="flex items-center gap-2">
              <div className="h-2 w-24 rounded-full bg-muted"><div className={`h-2 rounded-full ${pct > 80 ? "bg-destructive" : "bg-primary"}`} style={{ width: `${pct}%` }} /></div>
              <span className="text-xs text-muted-foreground">{pct}%</span>
            </div>];
        })} />
    </AppShell>
  );
}
