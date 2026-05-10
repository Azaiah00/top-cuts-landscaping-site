// Sticky CTA — appears after the hero scrolls out of view.
// Bottom on mobile, top on desktop. Phone + Quote button.
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function StickyQuoteBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show after the user scrolls roughly past a hero (~100vh).
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Mobile bottom bar */}
          <motion.div
            key="mobile"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-tc-deep-navy text-tc-warm-cream shadow-2xl"
          >
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <a
                href="tel:8049125530"
                className="flex items-center justify-center gap-2 py-4 font-medium"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
              <Link
                href="/quote"
                className="flex items-center justify-center bg-tc-fresh-cut text-white py-4 font-medium hover:bg-tc-deep-forest transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
