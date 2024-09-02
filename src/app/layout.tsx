import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
        className={`${ibmPlexSans.className} antialiased grid grid-cols-12 sm:gap-4 px-4 lg:px-16 2xl:max-w-fit`}
      >
        {children}
      </body>
    </html>
  );
}
