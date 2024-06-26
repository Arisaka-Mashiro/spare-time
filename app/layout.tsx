import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "@/context/AuthContext";
import NaverMapContext from "@/context/naver-map-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContext>
        <NaverMapContext>
          <body className={inter.className}>{children}</body>
        </NaverMapContext>
      </AuthContext>
    </html>
  );
}
