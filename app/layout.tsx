import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/StructuredData";
import { ClientProviders } from "@/components/ClientProviders";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Preconnect to external domains for faster resource loading
const preconnectUrls = [
  "https://api.cardanoscan.io",
];

export const metadata: Metadata = {
  metadataBase: new URL('https://sandstone.io'),
  title: "Sandstone Stake Pool - Earn More ADA with Confidence",
  description: "A pioneer Cardano stake pool delivering consistent rewards since the early days of the network. Low fees, high pledge, and 24/7 monitored infrastructure.",
  keywords: ["Cardano", "ADA", "Stake Pool", "Staking", "Cryptocurrency", "Blockchain", "SAND", "Cardano Staking", "ADA Rewards"],
  authors: [{ name: "Sandstone Ventures Pty Ltd" }],
  creator: "Sandstone Ventures Pty Ltd",
  publisher: "Sandstone Ventures Pty Ltd",
  applicationName: "Sandstone Stake Pool",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.jpg",
  },
  openGraph: {
    type: "website",
    title: "Sandstone Stake Pool - Earn More ADA with Confidence",
    description: "A pioneer Cardano stake pool delivering consistent rewards since the early days of the network. Low fees, high pledge, and 24/7 monitored infrastructure.",
    siteName: "Sandstone Stake Pool",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandstone Stake Pool - Earn More ADA",
    description: "A pioneer Cardano stake pool delivering consistent rewards since the early days of the network.",
    creator: "@sandstonepool",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0437ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        {preconnectUrls.map((url) => (
          <link key={url} rel="preconnect" href={url} crossOrigin="anonymous" />
        ))}
        {/* DNS prefetch for API used by pool stats */}
        <link rel="dns-prefetch" href="https://api.cardanoscan.io" />
        <StructuredData />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ClientProviders>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
