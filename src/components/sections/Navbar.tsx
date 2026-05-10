"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
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
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-tc-warm-cream z-40 flex flex-col pt-24 px-6 transition-transform duration-500 ease-in-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 text-2xl font-display text-tc-deep-navy">
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
        <div className="mt-auto pb-12 flex flex-col gap-6">
          <a
            href="tel:8049125530"
            className="flex items-center justify-center gap-3 text-xl font-medium text-tc-deep-navy"
          >
            <Phone className="w-6 h-6 text-tc-fresh-cut" />
            (804) 912-5530
          </a>
          <Button asChild size="lg" className="w-full bg-tc-fresh-cut hover:bg-tc-deep-forest text-white text-lg">
            <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
              Get a Quote
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
