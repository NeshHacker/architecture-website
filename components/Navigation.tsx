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
        <div className={styles.logo}>Architect</div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </div>

        <nav
          className={`${styles.navLinks} ${
            menuOpen ? styles.active : ""
          }`}
        >
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </header>

      <div
        className={`${styles.overlay} ${
          menuOpen ? styles.showOverlay : ""
        }`}
        onClick={closeMenu}
      />
    </>
  );
}