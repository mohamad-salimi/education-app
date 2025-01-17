import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/header/Header";

export const metadata: Metadata = {
  title: "Education App | Instructors",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header title="Instructors" />
      {children}
    </div>
  );
}
