import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/dm-sans";
import NextAuthProvider from "@/providers/NextAuthProvider";
import "dotenv/config";

export const metadata: Metadata = {
  title: "Education App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto my-0 min-h-[100vh] max-w-[500px]">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
