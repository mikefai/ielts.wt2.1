import type { Metadata } from "next";
import Link from "next/link";
import { PenLine } from "lucide-react";
import { Inter } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "IELTS Writing Task 2 Prep",
  description: "Notes, drills and a timed mock exam for IELTS Academic Writing Task 2.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-slate-50/60">
        <header className="sticky top-0 z-20 border-b border-border bg-white/85 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
            <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-slate-900">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-teal shadow-sm"
              >
                <PenLine className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                IELTS Writing <span className="text-teal">Task 2</span>
              </span>
            </Link>
            <SiteNav />
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:py-10">{children}</main>
        <footer className="border-t border-border bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>IELTS Academic Writing Task 2 preparation</p>
            <p>Practice material is original and not affiliated with IELTS.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
