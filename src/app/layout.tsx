import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import { Navbar } from "@/components/layout/navbar";
import ToastProvider from "@/components/ToastProvider/ToastProvider";
import TanstackQueryProvider from "@/components/TanstackQueryProvider/TanstackQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog App Client",
  description: "A blog application built with Next.js and Tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackQueryProvider>

          <Navbar />
          {children}
          <ToastProvider />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
