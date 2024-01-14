import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Player",
  description: "Personal Music Library and Player",
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className + " w-full h-screen flex flex-col"}>
      <header className="sticky top-0">
        <div className="navbar">
          <Link className="btn btn-ghost text-xl" href="/">
            Home
          </Link>
          <Link className="btn btn-ghost text-xl" href="/song/upload">
            Upload
          </Link>
        </div>
      </header>
      <main className="grow">{children}</main>
    </body>
  </html>
);

export default Layout;
