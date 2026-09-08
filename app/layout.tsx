import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gims Delicacies | Cakes, Pastries, Drinks & Uji Power",
  description:
    "Order fresh cakes, cookies, cinnamon rolls, donuts, cupcakes, samosas, milkshakes, ice cream, yoghurts, and authentic Kenyan Uji Power at Gims Delicacies by Head Chef Alice Njambi. Fast WhatsApp ordering!",
  keywords: [
    "Gims Delicacies",
    "Wedding cakes Kenya",
    "Birthday cakes",
    "Graduation cakes",
    "Cinnamon rolls",
    "Donuts",
    "Samosas",
    "Milkshakes",
    "Uji Power",
    "Chef Alice Njambi",
    "Bakery Kenya",
  ],
  authors: [{ name: "Joseph Wanyoike Njoroge" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="relative text-stone-800 bg-[#fffdfa] min-h-screen pb-20 md:pb-0 antialiased">
        {children}
      </body>
    </html>
  );
}
