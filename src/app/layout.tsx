import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import "@/styles/reset.css";
import Header from "@/components/Header";

const logo = localFont({
  src: "../../public/fonts/Noxlock-4nWDB.otf",
  variable: "--font-logo",
});

const koMain = localFont({
  src: "../../public/fonts/SCDream3.otf",
  variable: "--font-koLogo",
});

const main = localFont({
  src: "../../public/fonts/Morganite-ExtraBold.ttf",
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Jung So Hyun portfolio",
  description: "안녕하세요 개발자 정소현입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${logo.variable} ${main.variable} ${koMain.variable}  antialiased  flex flex-col`}
      >
        <main className="overflow-y-scroll">{children}</main>
      </body>
    </html>
  );
}
