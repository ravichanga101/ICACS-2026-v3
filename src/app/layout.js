import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "glightbox/dist/css/glightbox.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata = {
  title:
    "ICACS 2026 - International Conference on Artificial Intelligence, Communication Technologies & Smart Cities",
  description:
    "International Conference on Artificial Intelligence, Communication Technologies & Smart Cities - 2026",
  keywords:
    "ICACS, AI, Communication Technologies, Smart Cities, Conference 2026",
  authors: [{ name: "CHARUSAT" }],
  openGraph: {
    title: "ICACS 2026",
    description:
      "International Conference on Artificial Intelligence, Communication Technologies & Smart Cities",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
