import type { Metadata } from "next";
import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Senna Cars Dashboard",
  description: "Dashboard to look up the rental database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
