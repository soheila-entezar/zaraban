import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import LogoZaraban from "@/logo/logo-zaraban";
import idkLogo from "@/assets/logo/idk.svg";
import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";

import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>
          <LogoZaraban width={"35px"} hieght={"35px"} /> نبض
        </div>
        <p>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
          ایران
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li className={styles.item}>
            <Link href="#">
              <Image className={styles.img} src={idkLogo} alt="IDK Logo" />
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <Image
                className={styles.img}
                src={certificateLogo}
                alt="Certificate Logo"
              />
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <Image
                className={styles.img}
                src={enamadLogo}
                alt="Enamad Logo"
              />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="https://t.me/soheila_se" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <MingcuteYoutubeFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به
        نبض می‌باشد!
      </p>
    </footer>
  );
}
