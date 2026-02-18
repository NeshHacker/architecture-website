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
        <Link href="/" className={styles.brand}>
          <img src="/images/logo/logo1.png" alt="Betsy Mugendi Logo" className={styles.logo} />
          <span>BETSY <strong>MUGENDI</strong></span>
        </Link>

        {/* Desktop Links */}
        <nav className={`${styles.links} ${mobileOpen ? styles.open : ''}`}>
          <Link href="/" className={isActive('/') ? styles.active : ''}>
            Home
          </Link>
          <Link href="/projects" className={isActive('/projects') ? styles.active : ''}>
            Projects
          </Link>
          <Link href="/services" className={isActive('/services') ? styles.active : ''}>
            Services
          </Link>
          <Link href="/about" className={isActive('/about') ? styles.active : ''}>
            About
          </Link>
          <Link href="/contact" className={isActive('/contact') ? styles.active : ''}>
            Contact
          </Link>
        </nav>

        {/* Hamburger */}
        <div
          className={`${styles.hamburger} ${mobileOpen ? styles.active : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}