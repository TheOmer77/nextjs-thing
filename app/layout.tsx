import { Figtree } from "@next/font/google";

import Nav from "@/components/Nav";

const font = Figtree({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-family",
  fallback: ["sans-serif"],
});

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={font.variable}>
      <head />
      <body>
        <Nav />
        <main className="mx-auto max-w-6xl p-4 sm:px-6 md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
