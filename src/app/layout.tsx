"use client";

import localFont from "next/font/local";
import "./globals.css";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Header from "./components/header";
import Footer from "./components/footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
      once: true, // Ensures animations happen only once
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
