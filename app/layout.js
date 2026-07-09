import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Sterling Bloom | Event Design & Decor",
  description:
    "Custom event design and decor for weddings, nikkahs, mehndis, corporate events, and private celebrations in Toronto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${manrope.variable} antialiased bg-cream text-foreground`}>
        {children}
      </body>
    </html>
  );
}
