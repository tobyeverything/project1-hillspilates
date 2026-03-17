import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hills Pilates | Bukit Jalil, Kuala Lumpur",
  description:
    "Strength. Balance. Control. Classical Pilates studio in Bukit Jalil City, Kuala Lumpur. Reformer, private & group classes.",
  keywords: [
    "Pilates",
    "Bukit Jalil",
    "Kuala Lumpur",
    "reformer",
    "fitness",
    "Pilates studio",
  ],
  openGraph: {
    title: "Hills Pilates | Bukit Jalil, Kuala Lumpur",
    description:
      "Strength. Balance. Control. Classical Pilates studio in Bukit Jalil City, Kuala Lumpur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hills Pilates | Bukit Jalil, Kuala Lumpur",
    description: "Strength. Balance. Control. Classical Pilates studio in Bukit Jalil City.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${cormorantGaramond.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
