import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/aankh-horizontal.png.asset.json";
import art from "@/assets/auth-illustration.png.asset.json";
import { pageHead } from "@/components/aankh/AppShell";

export const Route = createFileRoute("/login")({
  head: () => pageHead("Sign in", "Sign in to Aankh, the eye of your business."),
  component: Login,
});

function Login() {
  return (
    <div className="grid min-h-screen bg-background font-sans text-foreground lg:grid-cols-2">
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-lg">
          <img src={logo.url} alt="Aankh" className="h-9 w-auto" />
          <h1 className="mt-6 text-2xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Sign in to manage your business.</p>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <label className="block text-sm font-medium">Email
              <input type="email" placeholder="you@business.com" className="mt-1 h-11 w-full rounded-lg border border-input bg-card px-3 text-sm" />
            </label>
            <label className="block text-sm font-medium">Password
              <input type="password" placeholder="••••••••" className="mt-1 h-11 w-full rounded-lg border border-input bg-card px-3 text-sm" />
            </label>
            <Link to="/" className="flex h-11 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">Sign in</Link>
          </form>
          <p className="mt-4 text-center text-xs text-muted-foreground">Design preview — sign-in is not connected yet.</p>
        </div>
      </div>
      <div className="hidden items-center justify-center bg-accent p-10 lg:flex">
        <img src={art.url} alt="" className="max-h-[70vh] w-auto" />
      </div>
    </div>
  );
}
