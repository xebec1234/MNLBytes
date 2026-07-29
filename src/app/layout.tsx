import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "@/components/navigation/NavBar";
import ModeSwitch from "@/components/navigation/ModeSwitch";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MNLBytes",
  description: "Manuel's Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <NavBar />
        <ModeSwitch />
        {children}
      </body>
    </html>
  );
}
