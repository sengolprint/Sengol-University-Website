import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Sengol International University",
    template: "%s | Sengol International University",
  },
  description: "Sengol International University, Sikkim — academic programs, admissions, campus life, news and university information.",
  keywords: ["Sengol International University", "Sikkim university", "SIU", "university admissions", "higher education"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
