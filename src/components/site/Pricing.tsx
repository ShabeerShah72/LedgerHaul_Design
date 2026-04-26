import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Bookkeeping Only",
    price: "149",
    suffix: "/ mo",
    desc: "Flat-rate double-entry bookkeeping for owner-operators and small fleets.",
    features: [
      "Unlimited transactions",
      "Auto-categorization",
      "P&L, balance sheet, cash flow",
      "1099 + tax export",
      "API + dashboard access",
    ],
    cta: "Start bookkeeping",
    highlight: false,
  },
  {
    name: "Combo",
    price: "249",
    suffix: "+ $9 / worker",
    desc: "Payroll + bookkeeping in one ledger. The full stack for growing carriers.",
    features: [
      "Everything in Payroll & Bookkeeping",
      "Unified general ledger",
      "Settlement → ledger automation",
      "Priority support · 4hr SLA",
      "Dedicated success engineer",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Payroll Only",
    price: "189",
    suffix: "+ $7 / worker",
    desc: "Settlements, payouts, and tax forms — without the bookkeeping module.",
    features: [
      "Driver + contractor settlements",
      "Stripe payout integration",
      "1099 / W-2 generation",
      "Webhook event stream",
      "Email + chat support",
    ],
    cta: "Start payroll",
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-60" />

      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> PRICING
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gradient mb-5">
            Predictable pricing. No surprise fees.
          </h2>
          <p className="text-lg text-muted-foreground">
            Stripe-managed subscriptions with transparent per-worker billing.
            Cancel or scale at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative rounded-2xl border p-8 flex flex-col",
                p.highlight
                  ? "border-primary/50 bg-surface shadow-[0_0_60px_-15px_hsl(var(--primary)/0.4)]"
                  : "border-border bg-surface/50",
              )}
            >
              {p.highlight && (
                <>
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/40 via-transparent to-transparent -z-10 blur-sm" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    MOST POPULAR
                  </span>
                </>
              )}

              <h3 className="text-foreground font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 mb-6 min-h-[40px]">{p.desc}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-semibold text-foreground tracking-tight">${p.price}</span>
                <span className="text-muted-foreground text-sm">{p.suffix}</span>
              </div>

              <Button variant={p.highlight ? "hero" : "secondary"} size="lg" className="w-full mb-8">
                {p.cta}
              </Button>

              <ul className="space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10 font-mono">
          All plans · 14-day trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
};
