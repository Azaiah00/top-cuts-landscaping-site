// Contact page — two columns. Form left, contact info right.

import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram } from "lucide-react";
import { MagazineHero } from "@/components/sections/MagazineHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/sections/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Reach Top Cut Landscaping at (804) 912-5530, info@topcutlandscaping804.com, or send a message — Carson texts back within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <MagazineHero
        eyebrow="Contact"
        title="Send a note. Carson texts back."
        intro="Tell us about your property — Carson personally responds within one business day."
      />

      <section className="py-16 md:py-24 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="bg-tc-pure-white border border-tc-fog rounded-sm p-6 md:p-10">
              <ContactForm />
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="space-y-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                  Prefer to call
                </p>
                <a
                  href="tel:8049125530"
                  className="mt-2 flex items-center gap-3 font-display text-3xl md:text-4xl text-tc-deep-navy hover:text-tc-fresh-cut transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  (804) 912-5530
                </a>
              </div>

              <div className="border-t border-tc-fog pt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-0.5 text-tc-fresh-cut shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                      Email
                    </p>
                    <a
                      href="mailto:info@topcutlandscaping804.com"
                      className="text-tc-deep-navy hover:text-tc-fresh-cut transition-colors"
                    >
                      info@topcutlandscaping804.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-0.5 text-tc-fresh-cut shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                      Office
                    </p>
                    <p className="text-tc-deep-navy">
                      3206 Brewster Dr
                      <br />
                      Henrico, VA 23233
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-0.5 text-tc-fresh-cut shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                      Hours
                    </p>
                    <p className="text-tc-deep-navy">
                      Monday – Saturday · 8 AM – 5 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquare className="w-5 h-5 mt-0.5 text-tc-fresh-cut shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                      Prefer to text?
                    </p>
                    <a
                      href="sms:8049125530"
                      className="text-tc-deep-navy hover:text-tc-fresh-cut transition-colors"
                    >
                      (804) 912-5530
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="w-5 h-5 mt-0.5 text-tc-fresh-cut shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                      Instagram
                    </p>
                    <a
                      href="https://instagram.com/topcutlandscaping804"
                      target="_blank"
                      rel="noreferrer"
                      className="text-tc-deep-navy hover:text-tc-fresh-cut transition-colors"
                    >
                      @topcutlandscaping804
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-tc-deep-navy text-tc-warm-cream rounded-sm p-6">
                <p className="font-display text-xl">
                  We answer everything.
                </p>
                <p className="mt-2 text-sm text-tc-fog/80">
                  No bot, no offshore call center. If you don&rsquo;t hear back
                  in a business day, your message didn&rsquo;t reach us — please
                  try again.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
