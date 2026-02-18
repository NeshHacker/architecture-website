import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image
            src="/images/logo/betsy_logo2.jpeg"
            alt="Betsy Mugendi Architecture Logo"
            width={40}
            height={40}
          />
          <p className={styles.tagline}>
            Designing spaces where imagination meets structure.
          </p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.services}>
          <h4>Our Services</h4>
          <ul>
            <li>Architectural Design</li>
            <li>Interior Design</li>
            <li>Landscape Architecture</li>
            <li>Urban Planning</li>
            <li>3D Visualization</li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>Email: info@betsymugendi.com</p>
          <p>Phone: +254 700 000000</p>
          <p>Address: Nairobi, Kenya</p>
          <div className={styles.socials}>
            {/* Replace with social icons later */}
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Facebook</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Betsy ARCHITECT | All rights reserved.</p>
      </div>
    </footer>
  );
}
