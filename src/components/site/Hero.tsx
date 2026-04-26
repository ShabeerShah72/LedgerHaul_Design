import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 grid-bg mask-fade-radial opacity-40" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container relative mx-auto px-6">
        {/* Status pill */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-muted-foreground">All systems operational</span>
            <span className="text-border">·</span>
            <span className="text-foreground font-mono">v3.1 live</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient">
            The production backend
            <br />
            for <span className="text-gradient-mint">trucking finance</span>.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Programmatic payroll, contractor settlements, double-entry bookkeeping, and
            Stripe subscription billing — engineered as one API-first service.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="xl" className="group">
              Start free trial
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="xl">
              <Terminal />
              View API docs
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground font-mono">
            $ pip install ledgerhaul · &nbsp;Production-ready in &lt;5 minutes
          </p>
        </div>

        {/* Terminal mock */}
        <div className="mt-20 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-xl shadow-[0_30px_80px_-20px_hsl(156_64%_52%/0.25),0_0_0_1px_hsl(var(--border))] overflow-hidden">
            {/* glow ring */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/30 via-transparent to-primary/30 opacity-50 blur-sm -z-10" />

            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-muted">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
                api.ledgerhaul.com — settlements.run
              </div>
              <div className="font-mono text-xs text-muted-foreground">200 OK</div>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border font-mono text-sm">
              {/* Request */}
              <div className="p-6">
                <div className="text-xs text-muted-foreground mb-3">REQUEST</div>
                <pre className="text-foreground/90 leading-relaxed text-[13px]">
<span className="text-primary">POST</span> /v1/settlements/calculate
<span className="text-muted-foreground">Authorization:</span> Bearer lh_live_•••

{"{"}
  <span className="text-primary-glow">"driver_id"</span>: <span className="text-yellow-300/90">"drv_7834A"</span>,
  <span className="text-primary-glow">"period"</span>: <span className="text-yellow-300/90">"2025-W17"</span>,
  <span className="text-primary-glow">"loads"</span>: [
    {"{"} <span className="text-primary-glow">"miles"</span>: 1247,
      <span className="text-primary-glow">"rate"</span>: 0.62 {"}"},
    {"{"} <span className="text-primary-glow">"miles"</span>: 980,
      <span className="text-primary-glow">"rate"</span>: 0.58 {"}"}
  ],
  <span className="text-primary-glow">"deductions"</span>: [<span className="text-yellow-300/90">"fuel"</span>, <span className="text-yellow-300/90">"ifta"</span>]
{"}"}
                </pre>
              </div>
              {/* Response */}
              <div className="p-6 bg-surface-muted/40">
                <div className="text-xs text-muted-foreground mb-3 flex items-center justify-between">
                  <span>RESPONSE</span>
                  <span className="text-primary">42ms</span>
                </div>
                <pre className="text-foreground/90 leading-relaxed text-[13px]">
{"{"}
  <span className="text-primary-glow">"settlement_id"</span>: <span className="text-yellow-300/90">"set_b9f3d2"</span>,
  <span className="text-primary-glow">"gross_pay"</span>: <span className="text-primary">1341.54</span>,
  <span className="text-primary-glow">"deductions"</span>: <span className="text-primary">182.30</span>,
  <span className="text-primary-glow">"net_pay"</span>: <span className="text-primary">1159.24</span>,
  <span className="text-primary-glow">"ledger_entries"</span>: 6,
  <span className="text-primary-glow">"stripe_payout_id"</span>:
    <span className="text-yellow-300/90">"po_1Q8xM2..."</span>,
  <span className="text-primary-glow">"status"</span>: <span className="text-yellow-300/90">"posted"</span>
{"}"}
                </pre>
              </div>
            </div>
          </div>

          {/* Trusted by */}
          <div className="mt-16 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Trusted by carriers moving 2M+ miles weekly
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 opacity-60">
              {["NORTHBOUND", "PACIFIC HAUL", "RIDGELINE", "MERIDIAN FREIGHT", "CASCADE LOG.", "IRONROAD"].map((b) => (
                <span key={b} className="font-semibold tracking-widest text-foreground/70 text-sm">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
