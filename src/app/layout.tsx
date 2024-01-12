import "./globals.css";

import { Inter } from "next/font/google";
import Providers from "@/app/utils/providers";
import Header from "@components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Bruno Tassinari",
  description: "My personal portfolio",
};

type RootProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} h-screen bg-light-secondary text-light-text-primary dark:bg-dark-secondary dark:text-dark-text-primary`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
