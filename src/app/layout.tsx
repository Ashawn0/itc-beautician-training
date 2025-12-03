import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ITC Beautician Training & Service Center",
  description: "Professional beautician training in Nepal. Hair, makeup, skin, nail art courses.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = await getDictionary('en');

  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header nav={dict.nav} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer common={dict.common} nav={dict.nav} contact={dict.contact} />
      </body>
    </html>
  );
}
