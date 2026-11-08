import { createFileRoute } from "@tanstack/react-router";
import { Plus, Minus, Trash2 } from "lucide-react";
import { AppShell, Badge, Card, Table, pageHead } from "@/components/aankh/AppShell";
import { invoices, products, rs } from "@/lib/demo-data";

export const Route = createFileRoute("/sales")({
  head: () => pageHead("Sales & POS", "Make quick sales, print receipts and review invoices in Aankh."),
  component: Sales,
});

const cart = [
  { p: products[0]!, qty: 2 }, { p: products[2]!, qty: 1 }, { p: products[4]!, qty: 3 },
];

function Sales() {
  const total = cart.reduce((s, c) => s + c.p.price * c.qty, 0);
  return (
    <AppShell title="Sales & POS" subtitle="Scan or search a product to start a sale.">
      <div className="grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <h2 className="font-semibold">Products</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((p) => (
              <button key={p.sku} className="rounded-xl border border-border p-3 text-left hover:border-primary">
                <p className="text-sm font-semibold">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.brand} · {p.stock} in stock</p>
                <p className="mt-2 text-sm font-bold text-primary">{rs(p.price)}</p>
              </button>
            ))}
          </div>
        </Card>
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between"><h2 className="font-semibold">Current sale</h2><span className="text-xs text-muted-foreground">Walk-in customer</span></div>
          <ul className="mt-4 divide-y divide-border">
            {cart.map(({ p, qty }) => (
              <li key={p.sku} className="flex items-center gap-3 py-3 text-sm">
                <div className="flex-1"><p className="font-medium">{p.name}</p><p className="text-xs text-muted-foreground">{rs(p.price)} each</p></div>
                <div className="flex items-center gap-2"><Minus className="h-4 w-4 text-muted-foreground" /><span className="w-5 text-center font-semibold">{qty}</span><Plus className="h-4 w-4 text-muted-foreground" /></div>
                <span className="w-24 text-right font-semibold">{rs(p.price * qty)}</span>
                <Trash2 className="h-4 w-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-1 border-t border-border pt-4 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Discount</span><span>Rs 0</span></div>
            <div className="flex justify-between text-lg font-bold"><span>Total</span><span>{rs(total)}</span></div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button className="h-11 rounded-lg border border-border text-sm font-semibold">Save on credit</button>
            <button className="h-11 rounded-lg bg-primary text-sm font-semibold text-primary-foreground">Take cash & print</button>
          </div>
        </Card>
      </div>
      <h2 className="mb-3 mt-8 font-semibold">Invoices</h2>
      <Table head={["Invoice", "Customer", "Date", "Amount", "Status"]}
        rows={invoices.map((i) => [<span className="font-medium">{i.no}</span>, i.customer, i.date, rs(i.amount), <Badge>{i.status}</Badge>])} />
    </AppShell>
  );
}
