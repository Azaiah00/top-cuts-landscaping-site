"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Portals need a mounted client — avoids SSR mismatch and lets us attach to document.body.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll when the full-screen menu is open (mobile UX + fewer compositor glitches).
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        // While the drawer is open, keep the top bar fully opaque — backdrop-blur on this
        // ancestor can trap `position:fixed` children so they only cover the header strip,
        // which looks like a "see-through" menu on mobile WebKit.
        mobileMenuOpen
          ? "bg-tc-warm-cream shadow-sm py-3"
          : isScrolled
            ? "bg-tc-pure-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="Top Cut Landscaping"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display font-bold text-xl text-tc-deep-navy hidden sm:block">
            Top Cut
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-tc-charcoal/80 hover:text-tc-fresh-cut transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:8049125530"
            className="flex items-center gap-2 text-sm font-medium text-tc-deep-navy hover:text-tc-fresh-cut transition-colors"
          >
            <Phone className="w-4 h-4" />
            (804) 912-5530
          </a>
          <Button asChild className="bg-tc-fresh-cut hover:bg-tc-deep-forest text-white">
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 text-tc-deep-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile full-screen nav: portaled to body so it always covers the viewport with a
          solid cream panel (never composited as a thin strip under/header quirks). */}
      {mounted
        ? createPortal(
            <div
              className={cn(
                "lg:hidden fixed inset-0 z-[60] flex min-h-[100dvh] flex-col px-6 pt-24",
                // Explicit opaque fill — matches brand cream; no transparency.
                "bg-tc-warm-cream",
                "transition-transform duration-500 ease-in-out",
                mobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
              )}
              aria-hidden={!mobileMenuOpen}
            >
              <nav
                className="flex flex-col gap-6 text-2xl font-display text-tc-deep-navy"
                id="mobile-nav"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-tc-fresh-cut transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-6 pb-12">
                <a
                  href="tel:8049125530"
                  className="flex items-center justify-center gap-3 text-xl font-medium text-tc-deep-navy"
                >
                  <Phone className="w-6 h-6 text-tc-fresh-cut" />
                  (804) 912-5530
                </a>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-tc-fresh-cut text-lg text-white hover:bg-tc-deep-forest"
                >
                  <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>,
            document.body
          )
        : null}
    </header>
  );
}
