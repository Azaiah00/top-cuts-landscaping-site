import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-tc-deep-navy text-tc-warm-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-tc-warm-cream rounded-full p-1">
                <Image
                  src="/logo.png"
                  alt="Top Cut Landscaping"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-display font-bold text-xl">Top Cut Landscaping</span>
            </div>
            <p className="text-tc-fog/80 max-w-xs">
              A small Henrico crew, doing the work right, since 2008.
            </p>
            <div className="flex flex-col gap-2 text-sm text-tc-fog/90">
              <p>3206 Brewster Dr, Henrico, VA 23233</p>
              <a href="tel:8049125530" className="hover:text-tc-fresh-cut transition-colors">
                (804) 912-5530
              </a>
              <a href="mailto:info@topcutlandscaping804.com" className="hover:text-tc-fresh-cut transition-colors">
                info@topcutlandscaping804.com
              </a>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://instagram.com/topcutlandscaping804" target="_blank" rel="noreferrer" className="text-tc-fog hover:text-tc-fresh-cut transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-tc-fog hover:text-tc-fresh-cut transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-display text-lg mb-6 text-tc-pure-white">Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-tc-fog/80">
              <li><Link href="/services/mowing" className="hover:text-tc-fresh-cut transition-colors">Weekly Lawn Care</Link></li>
              <li><Link href="/services/mulch" className="hover:text-tc-fresh-cut transition-colors">Mulch & Bed Work</Link></li>
              <li><Link href="/services/installation" className="hover:text-tc-fresh-cut transition-colors">Landscape Installation</Link></li>
              <li><Link href="/services/cleanups" className="hover:text-tc-fresh-cut transition-colors">Seasonal Cleanups</Link></li>
              <li><Link href="/services/aeration" className="hover:text-tc-fresh-cut transition-colors">Aeration & Overseeding</Link></li>
              <li><Link href="/services/pruning" className="hover:text-tc-fresh-cut transition-colors">Pruning & Hedge Care</Link></li>
              <li><Link href="/services/gravel" className="hover:text-tc-fresh-cut transition-colors">Gravel & Drainage</Link></li>
              <li><Link href="/services/tree-care" className="hover:text-tc-fresh-cut transition-colors">Tree Care</Link></li>
            </ul>
          </div>

          {/* Column 3: Areas & Journal */}
          <div>
            <h3 className="font-display text-lg mb-6 text-tc-pure-white">Service Areas</h3>
            <ul className="flex flex-col gap-3 text-sm text-tc-fog/80 mb-8">
              <li><Link href="/service-areas/henrico" className="hover:text-tc-fresh-cut transition-colors">Henrico</Link></li>
              <li><Link href="/service-areas/short-pump" className="hover:text-tc-fresh-cut transition-colors">Short Pump</Link></li>
              <li><Link href="/service-areas/west-end" className="hover:text-tc-fresh-cut transition-colors">West End</Link></li>
              <li><Link href="/service-areas/glen-allen" className="hover:text-tc-fresh-cut transition-colors">Glen Allen</Link></li>
            </ul>
            
            <h3 className="font-display text-lg mb-4 text-tc-pure-white">Recent Journal</h3>
            <ul className="flex flex-col gap-3 text-sm text-tc-fog/80">
              <li><Link href="/journal/how-to-read-a-lawn" className="hover:text-tc-fresh-cut transition-colors line-clamp-1">How to read a lawn</Link></li>
              <li><Link href="/journal/case-for-double-shredded-mulch" className="hover:text-tc-fresh-cut transition-colors line-clamp-1">The case for double-shredded mulch</Link></li>
              <li><Link href="/journal/why-we-mow-on-tuesdays" className="hover:text-tc-fresh-cut transition-colors line-clamp-1">Why we mow on Tuesdays in Wyndham</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-tc-fog/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-tc-fog/60">
          <p>© {new Date().getFullYear()} Top Cut Landscaping, LLC · Henrico, VA</p>
          <div className="flex items-center gap-4">
            <span>Licensed & Insured</span>
            <span>·</span>
            <Link href="/privacy" className="hover:text-tc-pure-white transition-colors">Privacy</Link>
            <span>·</span>
            <Link href="/sitemap.xml" className="hover:text-tc-pure-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
