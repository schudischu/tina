import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pilates Studio MissionYou - Ihr Weg zu Kraft und Flexibilität",
  description: "Professionelles Pilates Training in entspannter Atmosphäre. Buchen Sie jetzt Ihre Probestunde!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
