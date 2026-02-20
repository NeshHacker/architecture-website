import Head from 'next/head'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Betsy Mugendi Architecture</title>
      </Head>

      <main className={styles.main}>
        {/* HERO */}
        <Reveal>
          <section className={styles.hero}>
            <div className={styles.overlay}></div>

            <video autoPlay loop muted playsInline className={styles.video}>
              <source
                src="/videos/Architectural_animation.mp4"
                type="video/mp4"
              />
            </video>

            <div className={styles.heroText}>
              <p className={styles.kicker}>Betsy Mugendi Architecture</p>

              <h1 className={styles.title}>
                Spaces That Feel Like The Future.
              </h1>

              <p className={styles.sub}>
                Modern architecture, interiors, and design — crafted with
                precision, elegance, and purpose.
              </p>

              <div className={styles.heroButtons}>
                <Link className={styles.primaryBtn} href="/projects">
                  View Projects
                </Link>

                <Link className={styles.secondaryBtn} href="/contact">
                  Request a Quote
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* FEATURED PROJECTS */}
        <Reveal delay={0.1}>
            <section className={`${styles.section} ${styles.featuredSection}`}>
              <div className={styles.sectionHeader}>
                <h2>Featured Projects</h2>
                <p>
                  A glimpse into spaces designed for modern living and timeless elegance.
                </p>
              </div>

              <div className={styles.grid}>
                <div className={styles.projectCard}>
                  <div
                    className={styles.projectThumb}
                    style={{ backgroundImage: "url('/images/projects/villa.jpg')" }}
                  ></div>
                  <h3>Modern Villa Concept</h3>
                  <p>Minimalist lines, warm lighting, and open-plan comfort.</p>
                </div>

                <div className={styles.projectCard}>
                  <div
                    className={styles.projectThumb}
                    style={{ backgroundImage: "url('/images/projects/luxury.jpeg')" }}
                  ></div>
                  <h3>Luxury Apartment Interior</h3>
                  <p>Contemporary interior design with a premium finish.</p>
                </div>

                <div className={styles.projectCard}>
                  <div
                    className={styles.projectThumb}
                    style={{ backgroundImage: "url('/images/projects/office.jpeg')" }}
                  ></div>
                  <h3>Commercial Office Space</h3>
                  <p>Functional design built for productivity and presence.</p>
                </div>
              </div>

              <div className={styles.center}>
                <a href="/projects" className={styles.exploreBtn}>
                  Explore All Projects →
                </a>
              </div>
            </section>
          </Reveal>


        {/* SERVICES */}
        <Reveal delay={0.15}>
          <section className={`${styles.section} ${styles.servicesSection}`}>
            <div className={styles.sectionHeader}>
              <h2>Services</h2>
              <p>
                From concept to completion — everything you need to bring your
                vision to life.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>Architectural Design</h3>
                <p>
                  Modern residential and commercial designs with strong spatial
                  planning.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <h3>Interior Design</h3>
                <p>
                  Elegant interiors with warm material choices and clean
                  finishing.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <h3>Consultation & Planning</h3>
                <p>
                  Project guidance, approvals, and professional design advice.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ABOUT PREVIEW */}
        <Reveal delay={0.2}>
          <section className={styles.aboutStrip}>
            <div className={styles.aboutText}>
              <h2>Design that balances beauty and function.</h2>

              <p>
                Betsy Mugendi Architecture focuses on creating spaces that feel bold,
                clean, and livable — where every detail has intention.
              </p>

              <Link className={styles.aboutBtn} href="/about">
                Learn More →
              </Link>
            </div>

            <div className={styles.aboutImage}></div>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.25}>
          <section className={styles.cta}>
            <div className={styles.ctaInner}>
              <h2>Ready to start your project?</h2>
              <p>
                Send a message and let’s discuss your space, budget, and timeline.
              </p>

              <Link className={styles.ctaBtn} href="/contact">
                Contact Betsy
              </Link>
            </div>
          </section>
        </Reveal>

      </main>
    </>
  )
}