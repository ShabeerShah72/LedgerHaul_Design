import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
            <span className="relative font-mono text-primary font-bold text-sm">LH</span>
          </div>
          <span className="font-semibold text-foreground text-lg tracking-tight">LedgerHaul</span>
        </a>

        <div className="hidden md:flex items-center gap-1 bg-surface/60 backdrop-blur-md border border-border rounded-full px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface-elevated transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button variant="default" size="sm">Get started</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="secondary" size="sm" className="flex-1">Sign in</Button>
              <Button variant="default" size="sm" className="flex-1">Get started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
