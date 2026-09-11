"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "APART" },
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "/questions", label: "Questions" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="APART home" onClick={() => setIsOpen(false)}>
          <Image src="/66bc6da8fe284e469308900a_icon_outline.svg" alt="" width={42} height={42} priority />
          <Image src="/Dovetails_APART.png" alt="Dovetails APART" width={1019} height={77} priority className={styles.wordmark} />
        </Link>
        <button type="button" className={styles.menuButton} aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`${styles.nav} ${isOpen ? styles.open : ""}`} aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink} onClick={() => setIsOpen(false)}>{link.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
