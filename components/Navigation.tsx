"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} onClick={closeMenu}>
            <Image
              src="/images/logo/logo1.png"
              alt="Betsy Mugendi Architect Logo"
              width={48}
              height={48}
              priority
            />
            <span>Betsy Mugendi Architect</span>
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/projects" onClick={closeMenu}>
              Projects
            </Link>
            <Link href="/services" onClick={closeMenu}>
              Services
            </Link>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}