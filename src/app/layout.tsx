import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "API-List-of-Countries",
  description: "List of countries with their respective flags",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center bg-gray-100 text-center">{children}</main>
      </body>
    </html>
  );
}
