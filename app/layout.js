import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/navbar/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home",
  description: "page generated for technical testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          property="og:description"
          content="page generated for technical testing."
        />
        <meta property="og:url" content="http://localhost:3000/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
