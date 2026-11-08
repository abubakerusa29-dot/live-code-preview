import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AppShell, Card, PrimaryButton, Table, pageHead } from "@/components/aankh/AppShell";
import { expenses, rs } from "@/lib/demo-data";

export const Route = createFileRoute("/money")({
  head: () => pageHead("Payments & Expenses", "Customer payments, supplier payments, expenses and profit & loss in Aankh."),
  component: Money,
});

const pl = [
  { label: "Sales", value: 3842000 }, { label: "Cost of goods", value: -2911000 },
  { label: "Expenses", value: -115500 },
];

function Money() {
  const profit = pl.reduce((s, r) => s + r.value, 0);
  return (
    <AppShell title="Payments & Expenses" subtitle="November so far"
      actions={<PrimaryButton><Plus className="h-4 w-4" /> Add expense</PrimaryButton>}>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <h2 className="font-semibold">Profit & loss</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {pl.map((r) => <li key={r.label} className="flex justify-between"><span className="text-muted-foreground">{r.label}</span><span>{rs(r.value)}</span></li>)}
          </ul>
          <div className="mt-4 flex justify-between border-t border-border pt-3 font-bold"><span>Net profit</span><span className="text-success">{rs(profit)}</span></div>
        </Card>
        <div className="lg:col-span-2">
          <Table head={["Expense", "Category", "Date", "Amount"]}
            rows={expenses.map((e) => [<span className="font-medium">{e.title}</span>, e.category, e.date, rs(e.amount)])} />
        </div>
      </div>
    </AppShell>
  );
}
