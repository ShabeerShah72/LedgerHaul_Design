import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative max-w-5xl mx-auto rounded-3xl border border-primary/30 bg-surface overflow-hidden p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-mesh opacity-80" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[100px] rounded-full" />
          <div className="absolute inset-0 grid-bg opacity-20 mask-fade-radial" />

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient mb-6 max-w-3xl mx-auto leading-tight">
              Ship the backend. Run the freight.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Deploy LedgerHaul in an afternoon. Calculate your first settlement before
              your next dispatch window closes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="xl" className="group">
                Start free trial
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="xl">Talk to engineering</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
