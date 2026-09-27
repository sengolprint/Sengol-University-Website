import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sengol International University",
  description: "Official website concept for Sengol International University",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
