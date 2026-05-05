import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import TransitionProvider from "@/components/TransitionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GPeredo98 | Portfolio",
  description: "Showcase about my experience, projects, and knowledge as a Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="relative min-h-screen bg-[#030712] text-white overflow-hidden">
          <div className="mb-6">
            <Navbar />
          </div>

          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
          <TransitionProvider>
						{children}
					</TransitionProvider>
        </main>
      </body>
    </html>
  );
}
