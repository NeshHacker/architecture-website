"use client";

import { useState } from "react";
import Link from "next/link";
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
          <div className={styles.brand}>
            <span>Architect</span>
          </div>

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