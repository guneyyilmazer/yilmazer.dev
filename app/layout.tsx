import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Parallax from './components/Parallax'
import './css/styles.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yilmazer.dev",
  description: "Guney Yilmazer, Full Stack Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Parallax/>
        </body>
    </html>
  );
}
