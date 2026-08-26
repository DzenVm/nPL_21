import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { site } from "@/lib/content";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-family",
  display: "swap",
  weight: ["500", "600"],
});

const body = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-family",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Sieciowa gra logiczna online — planuj trasy tramwaju, wody i prądu",
    template: "%s — gra logiczna online",
  },
  description:
    "Przeglądarkowa gra logiczna dla Polski: układasz trzy sieci — tramwajową, wodną i energetyczną — na planszy heksagonalnej, zanim zabraknie miejsca. 58 plansz kampanii, plansza dnia i tryb Sąsiedztwa. Bez opłat, bez elementów losowych.",
  keywords: [
    "gra logiczna online",
    "gra przeglądarkowa",
    "gra strategiczna po polsku",
    "puzzle miejski",
    "planszówka w przeglądarce",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: site.baseUrl,
    title: "Sieciowa gra logiczna online — planuj trasy tramwaju, wody i prądu",
    description:
      "Trzy warstwy tras, jedna plansza heksagonalna. Kampania, plansza dnia i asynchroniczny tryb Sąsiedztwa — bez opłat i bez losowości.",
    siteName: "Sieciowa gra logiczna",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sieciowa gra logiczna online",
    description: "Trzy warstwy tras, jedna plansza heksagonalna. Zagraj bez zakładania konta.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#10141a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#glowna-tresc" className="skip-link">
          Przejdź do treści głównej
        </a>
        <Header />
        <main id="glowna-tresc">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
