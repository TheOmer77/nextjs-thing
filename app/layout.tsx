import Nav from "@/src/components/Nav";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
