import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rosina Pissaco",
  description: "Product Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased max-w-3xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
