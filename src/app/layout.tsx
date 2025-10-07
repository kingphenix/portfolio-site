'use client';

import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const slideIn = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-background text-black`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            variants={slideIn}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ position: "relative" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
