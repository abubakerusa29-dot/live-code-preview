import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AppShell, Badge, Card, PrimaryButton, Table, pageHead } from "@/components/aankh/AppShell";
import { products, rs } from "@/lib/demo-data";

export const Route = createFileRoute("/products")({
  head: () => pageHead("Products & Inventory", "Manage products, brands, categories and stock levels in Aankh."),
  component: Products,
});

function Products() {
  const value = products.reduce((s, p) => s + p.price * p.stock, 0);
  return (
    <AppShell title="Products & Inventory" subtitle={`${products.length} products · stock value ${rs(value)}`}
      actions={<PrimaryButton><Plus className="h-4 w-4" /> Add product</PrimaryButton>}>
      <div className="mb-4 grid gap-4 sm:grid-cols-3">
        <Card><p className="text-sm text-muted-foreground">Brands</p><p className="mt-1 text-2xl font-bold">{new Set(products.map((p) => p.brand)).size}</p></Card>
        <Card><p className="text-sm text-muted-foreground">Categories</p><p className="mt-1 text-2xl font-bold">{new Set(products.map((p) => p.category)).size}</p></Card>
        <Card><p className="text-sm text-muted-foreground">Below reorder level</p><p className="mt-1 text-2xl font-bold text-destructive">{products.filter((p) => p.stock < p.reorder).length}</p></Card>
      </div>
      <Table head={["SKU", "Product", "Brand", "Category", "Price", "Stock", ""]}
        rows={products.map((p) => [p.sku, <span className="font-medium">{p.name}</span>, p.brand, p.category, rs(p.price), p.stock,
          p.stock < p.reorder ? <Badge>Low</Badge> : null])} />
    </AppShell>
  );
}
