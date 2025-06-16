import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "田中太郎 - Example Portfolio",
  description: "株式会社Example CEO - Webサービス開発、イベントプロデュース、コンサルティング事業",
  keywords: "田中太郎, Example, CEO, Webサービス開発, イベントプロデュース, コンサルティング, プロフィール",
  authors: [{ name: "田中太郎" }],
  creator: "田中太郎",
  metadataBase: new URL("https://awakeinc.co.jp"),
  openGraph: {
    title: "田中太郎 - Example Portfolio",
    description: "株式会社Example CEO - Webサービス開発、イベントプロデュース、コンサルティング事業",
    url: "https://awakeinc.co.jp",
    siteName: "田中太郎 Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "田中太郎 - Example Portfolio",
    description: "株式会社Example CEO - Webサービス開発、イベントプロデュース、コンサルティング事業",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
