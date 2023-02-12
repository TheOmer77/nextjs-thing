import { Figtree } from "@next/font/google";

import Nav from "@/components/Nav";

const font = Figtree({ subsets: ["latin"] });

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. 
      */}
      <head />
      <body className={font.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
