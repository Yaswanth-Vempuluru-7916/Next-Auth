import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/auth/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solo Leveling System",
  description: "Awaken your true power",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-gray-300 h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-1 overflow-auto bg-gradient-to-br from-gray-900 via-black to-gray-950 p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
