// Brief, plain-language privacy stub. The footer links here.

import type { Metadata } from "next";
import { MagazineHero } from "@/components/sections/MagazineHero";
import { CTABand } from "@/components/sections/CTABand";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy",
  description:
    "How Top Cut Landscaping uses the information you share through our website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <MagazineHero
        eyebrow="Privacy"
        title="Plain-language privacy."
      />

      <section className="py-16 md:py-24 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-tc-charcoal/85">
          <p>
            We collect what you tell us — your name, email, phone, address —
            so we can reply with a quote. We don&rsquo;t sell it, share it, or
            send it anywhere besides Carson&rsquo;s inbox.
          </p>
          <p>
            We use Google Analytics to count page views and see which posts
            are working. We don&rsquo;t use re-targeting pixels or social
            tracking.
          </p>
          <p>
            Email comes through Resend; analytics through Google Analytics 4.
            That&rsquo;s the whole stack.
          </p>
          <p>
            Want us to delete your information? Email{" "}
            <a
              href="mailto:info@topcutlandscaping804.com"
              className="text-tc-deep-navy underline underline-offset-4"
            >
              info@topcutlandscaping804.com
            </a>{" "}
            and we will.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
