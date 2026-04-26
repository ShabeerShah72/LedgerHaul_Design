import { Check } from "lucide-react";

export const Capabilities = () => {
  return (
    <section id="capabilities" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: copy + checklist */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> SETTLEMENTS ENGINE
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gradient mb-6">
              Contractor settlements, calculated correctly. Every time.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Run per-mile, per-load, percentage, and salary models in the same
              call. Deduct fuel advances, IFTA, escrow, insurance, and post
              every cent to the ledger automatically.
            </p>
            <ul className="space-y-3">
              {[
                "Per-mile, per-load, % of revenue, and hybrid pay structures",
                "Automatic fuel advance reconciliation and IFTA deductions",
                "1099-NEC and W-2 export, year-round",
                "Idempotent calculations with full audit trail",
                "Webhook events on every settlement state change",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: settlement card UI */}
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-border bg-surface shadow-[0_20px_60px_-20px_hsl(156_64%_52%/0.3)] overflow-hidden">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground font-mono">SETTLEMENT</div>
                  <div className="text-foreground font-semibold">#set_b9f3d2 · Week 17</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-medium">
                  POSTED
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-baseline pb-4 border-b border-border">
                  <span className="text-muted-foreground text-sm">Driver</span>
                  <span className="text-foreground font-medium">Marcus Reyes · drv_7834A</span>
                </div>

                {[
                  ["Loaded miles · 2,227 mi", "+ $1,341.54"],
                  ["Detention pay · 2 hrs", "+ $90.00"],
                  ["Fuel advance", "− $142.30"],
                  ["IFTA reserve", "− $40.00"],
                  ["Insurance escrow", "− $90.00"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-baseline text-sm">
                    <span className="text-muted-foreground">{k}</span>
                    <span className={v.startsWith("+") ? "text-foreground font-mono" : "text-destructive/80 font-mono"}>{v}</span>
                  </div>
                ))}

                <div className="border-t border-border pt-4 flex justify-between items-baseline">
                  <span className="text-foreground font-medium">Net pay</span>
                  <span className="text-2xl font-semibold text-primary font-mono">$1,159.24</span>
                </div>

                <div className="bg-surface-muted/60 border border-border rounded-lg p-3 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
                  <div className="flex-1 text-xs text-muted-foreground">
                    Posted to <span className="text-foreground font-mono">stripe.po_1Q8xM2</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">42ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
