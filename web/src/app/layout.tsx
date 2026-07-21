import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam's Developer Portfolio",
  description: "A modern software engineering portfolio powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth`}
    >
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        {/* THE GLOBAL NAVIGATION BAR */}
        <nav className={`${geistSans.variable} sticky top-0 z-50 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 p-4 flex justify-between items-center`}>
          {/* Logo / Name */}
          <div>
            <a href="/" className="text-xl font-bold">
              adam-folkman<span className="text-blue-600">.dev</span>
            </a>
          </div>
          {/* Navigation Links */}
          <div>
            <ul className="flex gap-6">
              <li><Link href="/#about-me" className="hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200">About Me</Link></li>
              <li><Link href="https://www.linkedin.com/in/adamfolkman/" target="_blank" className="hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200">Resumé</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200">Portfolio</Link></li>
              <li><Link href="https://github.com/afolkman" target="_blank" className="hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200">GitHub</Link></li>
            </ul>
          </div>
        </nav>
        {/* THE PAGE CONTENT */}
        {/* Whatever page the user is on will be injected into this 'children' variable */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
