import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

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
  title: "Yash Kansara",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col-reverse lg:flex-row lg:justify-start w-full h-[100vh] bg-slate-900 text-white`}
      >
        <Navbar />
        <div className="flex flex-col w-full h-full">
          <Header />
          <main className="w-full h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
