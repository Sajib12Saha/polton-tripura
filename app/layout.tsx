import type { Metadata } from "next";
import { Smooch_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/provider/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { getProfile } from "@/actions/get-profile";

const smooch = Smooch_Sans({
  weight: [
    "100", "200", "300", "400", "500",
    "600", "700", "800", "900",
  ],
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();

  if (!profile) {
    return {
      title: "Sajib Chandra Saha",
      description: "Portfolio website of Sajib Chandra Saha",
    };
  }

  return {
    title: profile.name || "Sajib Chandra Saha",
    description: profile.metaDescription || "Sajib Chandra Saha",
    icons: {
      icon: profile.metaImage || "",
    },
    openGraph: {
      title: profile.name || "Sajib Chandra Saha",
      description: `Portfolio website powered by ${profile.name}`,
      url: process.env.NEXT_PUBLIC_URL!,
      siteName: profile.name,
      images: [
        {
          url: profile.openGraphImage || "",
          width: 1200,
          height: 630,
          alt: `${profile.name} Portfolio`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: profile.name,
      description: `Portfolio website powered by ${profile.name}`,
      images: [profile.twitterImage || ""],
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
  const profile = await getProfile();

  if (!profile) {
    return (
      <html lang="en">
        <body className={smooch.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
              <h1 className="text-4xl font-bold text-red-600 mb-4">Profile Not Found</h1>
              <p className="text-lg text-muted-foreground mb-6">
                We couldn't load profile information. Please try again later or contact support.
              </p>
              <p className="text-base text-gray-500">
                Sajib Chandra Saha © {new Date().getFullYear()}
              </p>
              <Toaster />
            </main>
          </ThemeProvider>
        </body>
      </html>
    );
  }

  const {
    name,
    primaryImage,
    socialMedia,
    address,
    phone,
    email,
    professionBio,
  } = profile;

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
            name={name}
            primaryImage={primaryImage}
            socialMedia={socialMedia}
            professionBio={professionBio}
          />
          <main className="px-6 md:px-20 mx-auto max-w-7xl my-20">
            {children}
          </main>
          <Separator className="mx-auto max-w-7xl" />
          <Footer
            socialMedia={socialMedia}
            address={address}
            phone={phone}
            email={email}
            name={name}
          />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
