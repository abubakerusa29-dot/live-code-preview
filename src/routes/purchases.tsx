import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AppShell, Badge, Card, PrimaryButton, Table, pageHead } from "@/components/aankh/AppShell";
import { purchases, rs, suppliers } from "@/lib/demo-data";

export const Route = createFileRoute("/purchases")({
  head: () => pageHead("Purchases & Suppliers", "Record purchases, track supplier balances and ledgers in Aankh."),
  component: Purchases,
});

function Purchases() {
  return (
    <AppShell title="Purchases & Suppliers" subtitle="What you bought and what you owe."
      actions={<PrimaryButton><Plus className="h-4 w-4" /> New purchase</PrimaryButton>}>
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {suppliers.map((s) => (
          <Card key={s.name}>
            <p className="font-semibold">{s.name}</p>
            <p className="text-xs text-muted-foreground">{s.phone} · last purchase {s.lastPurchase}</p>
            <p className="mt-3 text-sm text-muted-foreground">Payable</p>
            <p className={`text-xl font-bold ${s.payable ? "text-warning" : "text-success"}`}>{rs(s.payable)}</p>
          </Card>
        ))}
      </div>
      <Table head={["Order", "Supplier", "Date", "Amount", "Status"]}
        rows={purchases.map((p) => [<span className="font-medium">{p.no}</span>, p.supplier, p.date, rs(p.amount), <Badge>{p.status}</Badge>])} />
    </AppShell>
  );
}
