import type { Metadata, Viewport } from "next";
import { Aref_Ruqaa } from "next/font/google";
import { thmanyahSans } from "@/fonts";
import InstallPrompt from "./install-prompt";
import "./globals.css";

const arefRuqaa = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-aref",
  display: "swap",
});

export const metadata: Metadata = {
  title: "حجابك — خُمُر وحجابات بسِترٍ يليق بكِ",
  description:
    "مشغل أردني للخُمُر والطُرَح والنُقُب والعبايات من أجود الأقمشة الكورية والتركية. اطلبي عبر واتساب، والدفع عند الاستلام مع توصيل لكل محافظات الأردن.",
  openGraph: {
    title: "حجابك — خُمُر وحجابات بسِترٍ يليق بكِ",
    description:
      "خُمُر وطُرَح ونُقُب تُخاط في مشغلنا بعمّان وتصلك حتى بابك. اطلبي عبر واتساب والدفع عند الاستلام.",
    type: "website",
    locale: "ar_JO",
    siteName: "حجابك",
  },
  applicationName: "حجابك",
  appleWebApp: {
    capable: true,
    title: "حجابك",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${thmanyahSans.variable} ${arefRuqaa.variable} antialiased`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}
