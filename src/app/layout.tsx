import type { Metadata } from "next";
import { IM_Fell_Great_Primer, Montserrat } from "next/font/google";
import "./globals.css";
import { ThumbnailsProvider } from "./ThumbnailsContext";

const font = IM_Fell_Great_Primer({
  subsets: ["latin"],
  weight: ["400"],
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
    <html lang="en" className={font.className}>
      <body>
        <ThumbnailsProvider>{children}</ThumbnailsProvider>
      </body>
    </html>
  );
}
