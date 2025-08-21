import type { Metadata } from "next";
import { Smooch_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/provider/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";


const smooch = Smooch_Sans({
  weight: [
    "100", "200", "300", "400", "500",
    "600", "700", "800", "900",
  ],
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Paltan Joy Tripura",
    description: "Sajib Chandra Saha",
    icons: {
      icon: "/paltan.jpeg", // relative path to your icon or undefined
    },
    openGraph: {
      title: "Paltan Joy Tripura",
      description: `Portfolio website powered by Paltan Joy Tripura`,
      url: undefined, // leave undefined if no URL yet
      siteName: "Paltan Joy Tripura",
      images: [
        {
          url: "/palton.png", // relative path or absolute URL
          width: 1200,
          height: 630,
          alt: `Paltan Joy Tripura Portfolio`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Paltan Joy Tripura",
      description: `Portfolio website powered by Paltan Joy Tripura`,
      images: ["/palton.png"], // relative path or absolute URL
      site: "@your_twitter_handle",
      creator: "@your_twitter_handle",
    },
  };
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={smooch.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar
          />
          <main className="px-6 md:px-20 mx-auto max-w-7xl my-20">
            {children}
          </main>
          <Separator className="mx-auto max-w-7xl" />
          <Footer
          />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
