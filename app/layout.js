import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/navbar/components/Header";

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
  description: "Page generated for technical testing",
  openGraph: {
    description: "Page generated for technical testing.",
    url: "http://localhost:3000/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
