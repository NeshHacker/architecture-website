import Head from 'next/head'
import styles from '../styles/Services.module.css'

export default function ServicesPage() {
  const services = [
    {
      title: 'Architectural Design',
      desc: 'From concept to final drawings — modern, functional, and visually striking spaces.',
    },
    {
      title: 'Interior Design',
      desc: 'Warm minimal interiors, space planning, and finishes that feel premium and timeless.',
    },
    {
      title: '3D Visualization',
      desc: 'High-quality renders and walkthrough concepts to help you see the final result before building.',
    },
    {
      title: 'Construction Drawings',
      desc: 'Detailed working drawings for approvals, contractors, and accurate on-site execution.',
    },
    {
      title: 'Renovation & Remodeling',
      desc: 'Upgrading old spaces into modern, usable, and beautiful environments.',
    },
    {
      title: 'Consultation',
      desc: 'Advice on design direction, budgets, approvals, and smart planning decisions.',
    },
  ]

  return (
    <>
      <Head>
        <title>Services | Betsy Mugendi Architecture</title>
      </Head>

      <main className={styles.page}>
        <section className={styles.header}>
          <h1 className={styles.title}>Services</h1>
          <p className={styles.subtitle}>
            A full range of architectural and design services — delivered with
            precision, creativity, and a futuristic aesthetic.
          </p>
        </section>

        <section className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Have a project in mind?</h2>
          <p className={styles.ctaText}>
            Let’s bring it to life — from first sketches to final build-ready
            drawings.
          </p>

          <a href="/contact" className={styles.ctaButton}>
            Contact Betsy
          </a>
        </section>
      </main>
    </>
  )
}
