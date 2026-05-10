// Root layout — wires fonts, base metadata, and global JSON-LD.
// Marketing pages render under (marketing)/layout.tsx which adds nav/footer.

import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { SITE_NAME, SITE_TAGLINE, localBusinessJsonLd, SITE_URL } from "@/lib/seo";

// Editorial display face — the "voice" of the brand.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

// Workhorse UI face — paragraphs, nav, forms.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Mono — small caps for stats and section eyebrows.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Handwritten accent — used very sparingly, mirrors logo script.
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Top Cut is a small Henrico crew obsessed with clean lines, deep mulch, and stripes you can see from the porch. Carson Tinsley, owner-operator, on every property.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
    >
      <body className="font-sans bg-tc-warm-cream text-tc-charcoal antialiased">
        {/* Keyboard-first accessibility — jump straight past the nav */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {children}

        {/* LocalBusiness JSON-LD — search engines see Top Cut as a local biz */}
        <Script
          id="ld-local-business"
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
