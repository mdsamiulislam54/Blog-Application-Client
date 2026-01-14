import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import './globals.css';
import { Navbar } from "@/components/layout/navbar";
import ToastProvider from "@/components/Provider/ToastProvider/ToastProvider";
import TanstackQueryProvider from "@/components/Provider/TanstackQueryProvider/TanstackQueryProvider";
import { ThemeProvider } from "@/components/Provider/Theme-Provider/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TanstackQueryProvider>

            <Navbar />
            {children}
            <ToastProvider />
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
