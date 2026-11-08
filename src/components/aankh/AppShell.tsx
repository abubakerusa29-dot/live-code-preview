import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Home, Receipt, Package, ShoppingCart, Users, Banknote, UserCog, MapPin, Search, Bell, Sparkles, LogOut,
} from "lucide-react";
import logo from "@/assets/aankh-horizontal.png.asset.json";
import { business } from "@/lib/demo-data";

const groups = [
  { label: "Home", items: [{ to: "/", label: "Dashboard", icon: Home }] },
  { label: "Sell", items: [{ to: "/sales", label: "Sales & POS", icon: Receipt }] },
  { label: "Stock", items: [{ to: "/products", label: "Products & Inventory", icon: Package }] },
  { label: "Buy", items: [{ to: "/purchases", label: "Purchases & Suppliers", icon: ShoppingCart }] },
  { label: "Customers", items: [{ to: "/customers", label: "Customers & Credit", icon: Users }] },
  { label: "Money", items: [{ to: "/money", label: "Payments & Expenses", icon: Banknote }] },
  {
    label: "Field team",
    items: [
      { to: "/manager", label: "Manager view", icon: UserCog },
      { to: "/salesman", label: "Salesman view", icon: MapPin },
    ],
  },
] as const satisfies ReadonlyArray<{ label: string; items: ReadonlyArray<{ to: NavTo; label: string; icon: typeof Home }> }>;

type NavTo = "/" | "/sales" | "/products" | "/purchases" | "/customers" | "/money" | "/manager" | "/salesman";
const allItems: ReadonlyArray<{ to: NavTo; label: string }> = groups.flatMap((g) => [...g.items]);

export function AppShell({ title, subtitle, actions, children }: {
  title: string; subtitle?: string; actions?: ReactNode; children: ReactNode;
}) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex">
        <div className="px-5 py-5">
          <img src={logo.url} alt="Aankh" className="h-8 w-auto" />
          <p className="mt-3 text-sm font-semibold">{business.name}</p>
        </div>
        <nav className="flex-1 space-y-4 overflow-y-auto px-3 pb-4">
          {groups.map((g) => (
            <div key={g.label}>
              <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{g.label}</p>
              {g.items.map((it) => {
                const active = it.to === "/" ? path === "/" : path.startsWith(it.to);
                const Icon = it.icon;
                return (
                  <Link key={it.to} to={it.to}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-card"}`}>
                    <Icon className="h-4 w-4" />{it.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
        <Link to="/login" className="flex items-center gap-2 border-t border-sidebar-border px-6 py-4 text-sm text-muted-foreground hover:text-foreground">
          <LogOut className="h-4 w-4" /> Sign out
        </Link>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-card px-4 py-3 md:px-8">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Search products, customers, invoices…"
              className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <button className="ml-auto rounded-lg p-2 text-muted-foreground hover:bg-muted" aria-label="Notifications"><Bell className="h-5 w-5" /></button>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            {business.owner[0]}
          </div>
        </header>

        <nav className="flex gap-2 overflow-x-auto border-b border-border bg-card px-4 py-2 md:hidden">
          {allItems.map((it) => (
            <Link key={it.to} to={it.to} className="whitespace-nowrap rounded-full bg-muted px-3 py-1 text-xs font-medium"
              activeProps={{ className: "bg-accent text-accent-foreground" }} activeOptions={{ exact: it.to === "/" }}>{it.label}</Link>
          ))}
        </nav>

        <main className="flex-1 px-4 py-6 md:px-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
            </div>
            {actions}
          </div>
          {children}
        </main>
        <footer className="px-8 pb-6 text-xs text-muted-foreground">Aankh — the eye of your business · Design preview with sample data</footer>
      </div>

      <button className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg">
        <Sparkles className="h-4 w-4" /> Ask Aankh
      </button>
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-card p-5 ${className}`}>{children}</div>;
}

export function Badge({ children }: { children: string }) {
  const tone: Record<string, string> = {
    Paid: "bg-success-light text-success", Received: "bg-success-light text-success", "Order taken": "bg-success-light text-success",
    "Payment collected": "bg-success-light text-success", "On route": "bg-accent text-accent-foreground",
    Credit: "bg-warning-light text-warning", Partial: "bg-warning-light text-warning", Pending: "bg-warning-light text-warning",
    "On leave": "bg-destructive-light text-destructive", Low: "bg-destructive-light text-destructive",
  };
  return <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${tone[children] ?? "bg-muted text-muted-foreground"}`}>{children}</span>;
}

export function PrimaryButton({ children }: { children: ReactNode }) {
  return <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90">{children}</button>;
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full text-sm">
        <thead className="bg-muted text-left text-xs uppercase tracking-wide text-muted-foreground">
          <tr>{head.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border">{r.map((c, j) => <td key={j} className="px-4 py-3">{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — Aankh` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Aankh` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
