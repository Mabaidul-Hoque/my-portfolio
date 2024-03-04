import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import DataProvider from "@/contexts/DataProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Best portfolio with animation features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <TransitionProvider>{children}</TransitionProvider>
        </DataProvider>
      </body>
    </html>
  );
}
