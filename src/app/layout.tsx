import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const lora = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eva Killenberg",
  description: "Personal site created 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
