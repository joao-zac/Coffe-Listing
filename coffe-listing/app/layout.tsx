import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// import beckk from "@/public/bg-cafe.jpg"

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffe Listing",
  description: "Coffe Listing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMSans.className} bg-var-black flex flex-col `}>
        <header className="bg-mybeck bg-cover bg-no-repeat h-72 " />
        {children}
      </body>
    </html>
  );
}
