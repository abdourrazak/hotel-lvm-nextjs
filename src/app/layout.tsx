import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Hôtel La Valeureuse Mère - Excellence Camerounaise",
  description: "Découvrez l'Hôtel La Valeureuse Mère au Cameroun, un établissement de standing offrant chambres luxueuses, restaurant gastronomique et services premium.",
  keywords: "hôtel Cameroun, Yaoundé, hébergement luxe, réservation en ligne, restaurant gastronomique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${raleway.variable} ${roboto.variable} antialiased font-raleway`}
      >
        {children}
      </body>
    </html>
  );
}
