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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. 
      */}
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
