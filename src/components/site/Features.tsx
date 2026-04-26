import { Shield, Database, CreditCard, GitBranch, Workflow, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Auth & RBAC",
    desc: "JWT-based authentication with admin, client, and driver roles. Route-level permission enforcement out of the box.",
    code: "role: 'admin' | 'client' | 'driver'",
  },
  {
    icon: Database,
    title: "Database & persistence",
    desc: "PostgreSQL in production, SQLite for local dev. SQLAlchemy ORM with Alembic and Flask-Migrate migrations.",
    code: "alembic upgrade head",
  },
  {
    icon: CreditCard,
    title: "Stripe subscriptions",
    desc: "Environment-driven Price IDs. Combo, Payroll Only, and Bookkeeping plans with full webhook handling.",
    code: "checkout.session.completed",
  },
  {
    icon: GitBranch,
    title: "Double-entry bookkeeping",
    desc: "Every transaction posts balanced ledger entries. Audit-ready financial records with immutable history.",
    code: "DEBIT  3,420.00\nCREDIT 3,420.00",
  },
  {
    icon: Workflow,
    title: "Migration tooling",
    desc: "Production-safe migrations with version control. Roll forward, roll back, no downtime required.",
    code: "flask db migrate -m \"...\"",
  },
  {
    icon: Lock,
    title: "Billing enforcement",
    desc: "Plan limits enforced at the API layer. Per-worker pricing, flat-rate options, automatic seat counting.",
    code: "if !plan.allows(action): 402",
  },
];

export const Features = () => {
  return (
    <section id="platform" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-muted/20 to-transparent" />

      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> PLATFORM
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gradient mb-5">
            Every layer engineered for production.
          </h2>
          <p className="text-lg text-muted-foreground">
            LedgerHaul ships a complete backend — not a starter kit. Authentication,
            persistence, billing, and bookkeeping interlock by design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative bg-background hover:bg-surface transition-colors p-8 min-h-[280px] flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                  <f.icon size={18} />
                </div>
                <h3 className="text-foreground font-semibold text-lg">{f.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {f.desc}
              </p>
              <pre className="font-mono text-xs text-primary/80 bg-surface-muted/60 border border-border rounded-md px-3 py-2 whitespace-pre-wrap">
                {f.code}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
