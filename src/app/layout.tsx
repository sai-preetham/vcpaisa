import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vcpaisa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VC Paisa — ₹1 nano fund for founders",
    template: "%s · VC Paisa",
  },
  description:
    "VC Paisa (Paisa VC) invests ₹1 into startups to scout founders. Get funded, featured, and a Funded by VC Paisa badge. vcpaisa.com · paisa.vc",
  keywords: [
    "VC Paisa",
    "Paisa VC",
    "nano fund",
    "₹1 investment",
    "startup funding India",
    "founder scouting",
  ],
  authors: [{ name: "VC Paisa" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "VC Paisa — ₹1 nano fund for founders",
    description:
      "₹1 investments. Real founders. Scout + signal. Apply for funding and get the Funded by VC Paisa badge.",
    siteName: "VC Paisa",
    images: [
      {
        url: "/badge.svg",
        width: 240,
        height: 72,
        alt: "Funded by VC Paisa",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "VC Paisa — ₹1 nano fund for founders",
    description:
      "₹1 investments. Real founders. Scout + signal. Apply at vcpaisa.com / paisa.vc",
    images: ["/badge.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
