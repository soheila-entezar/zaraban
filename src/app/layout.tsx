import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

import "./globals.css";
import Image from "next/image";
import styles from "@/components/footer/footer.module.css";
import footer from "@/assets/background/Footer-Element-2048x339.png";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "نبض",
  description: "پلتفرم جامع جستجو دکتر و رزرو انلاین دکتر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className}`}>
        <HeaderComponent />
        <main>{children}</main>
        {/*<p className="tagline">*/}
        {/*  نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان*/}
        {/*</p>*/}
        <div className="wave">
          <Image className="image" src={footer} alt={""} />
        </div>
        <FooterComponent />
      </body>
    </html>
  );
}
