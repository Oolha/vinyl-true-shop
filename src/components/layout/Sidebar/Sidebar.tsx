"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import { mainNavLinks } from "@/lib/navigation";
import Contacts from "@/components/ui/Contacts/Contacts";

interface NavLink {
  title: string;
  path: string;
}

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    if (path === "/catalog") {
      return pathname.startsWith("/catalog");
    }

    // Для якорів у маршрутах
    if (path.includes("#")) {
      const [basePath, anchor] = path.split("#");
      if (typeof window !== "undefined") {
        return pathname === "/" && window.location.hash === `#${anchor}`;
      }
      return false;
    }

    return pathname === path;
  };

  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.btnsContainer}>
        <button className={styles.langBtn}>UA</button>
        <span>/</span>
        <button className={styles.langBtn}>EN</button>
      </div>
      <div className={styles.logo}>Vinyl True</div>
      <nav>
        <ul className={styles.navList}>
          {mainNavLinks.map((link, index) => (
            <li
              key={index}
              className={
                isActive(link.path) ? styles.navItemActive : styles.navItem
              }
            >
              <Link href={link.path} className={styles.navLink}>
                <span
                  className={
                    isActive(link.path) ? styles.navTextActive : styles.navText
                  }
                >
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Contacts />
    </aside>
  );
};

export default Sidebar;
