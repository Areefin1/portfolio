import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faisal Areefin | Software Engineer",
  description: "Portfolio of Faisal Areefin, a software engineer and computer science graduate student at Georgia Tech. Explore selected full-stack and data-driven projects.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
