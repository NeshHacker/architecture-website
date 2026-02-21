import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Nav.module.css'

export default function Navigation() {
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (path: string) => router.pathname === path

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.brand} onClick={() => setMobileOpen(false)}>
          <img
            src="/images/logo/logo1.png"
            alt="Betsy Mugendi Logo"
            className={styles.logo}
          />
          <span>BETSY <strong>MUGENDI</strong></span>
        </Link>

        {/* Hamburger */}
        <div
          className={`${styles.hamburger} ${mobileOpen ? styles.active : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <nav className={`${styles.links} ${mobileOpen ? styles.open : ''}`}>
          <Link href="/" className={isActive('/') ? styles.active : ''} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/projects" className={isActive('/projects') ? styles.active : ''} onClick={() => setMobileOpen(false)}>Projects</Link>
          <Link href="/services" className={isActive('/services') ? styles.active : ''} onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/about" className={isActive('/about') ? styles.active : ''} onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className={isActive('/contact') ? styles.active : ''} onClick={() => setMobileOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}
    </header>
  )
}