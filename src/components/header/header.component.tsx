"use client";
import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();
  const itemsMenu = [
    { path: "/", title: "خانه" },
    { path: "./search", title: "جستجو" },
  ];
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {itemsMenu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={clsx(pathname === item.path && styles.active)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت نام</button>
    </header>
  );
}
