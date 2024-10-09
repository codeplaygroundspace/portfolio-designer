import type { Metadata } from "next";
import { Tinos, Prompt } from "next/font/google";
import "./globals.css";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-headers",
});

export const metadata: Metadata = {
  title: "Rosina Pissaco",
  description: "Senior Product Designer based in Bristol, UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tinos.variable} ${prompt.variable} antialiased grid grid-cols-12 sm:gap-4 px-4 lg:px-16 2xl:max-w-fit`}
      >
        {children}
      </body>
    </html>
  );
}
