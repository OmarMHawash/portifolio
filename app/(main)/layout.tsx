import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Nav from "../ui/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | OmarMH",
    default: "OmarMH",
  },
  description: "Omar M Hawash portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900`}
      >
        <div className="min-h-screen bg-[url('/noise.png')] bg-repeat">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
