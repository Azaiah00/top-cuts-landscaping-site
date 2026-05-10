// Marketing wrapper — sticky nav, sticky quote bar, footer.
// Every public page sits underneath this layout.

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyQuoteBar } from "@/components/sections/StickyQuoteBar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* `main` is the skip-link target from the root layout */}
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyQuoteBar />
    </div>
  );
}
