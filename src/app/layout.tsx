import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Кухня в грозном за маленькие цены | best kitchen in Grozny",
  description: "Лучшая кухня в Грозном",
  key: "Кухня в Грозном, kitchen, re[yz d uhjpyjv, кухня в грозном",
  keywords:
    "Кухня в Грозном, Кухня в Грозном, kitchen, re[yz d uhjpyjv, кухня в грозном",
  content: "Лучшая кухня в Грозном",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <>
        <Head>
          <title>
            Кухня в грозном за маленькие цены | best kitchen in Grozny
          </title>
          <meta
            name="description"
            content="Лучшая кухня в
          Грозном"
            key="Кухня в Грозном"
          ></meta>
        </Head>
        <body className={inter.className}>
          {children}
          <h1>JKSJKJADLKJSD</h1>
        </body>
      </>
    </html>
  );
}
