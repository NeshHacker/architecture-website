import Head from 'next/head'
import styles from '@/styles/About.module.css'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Betsy Mugendi Architecture</title>
      </Head>

      <main className={styles.page}>
        {/* Header */}
        <section className={styles.header}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.subtitle}>
            Architecture is more than buildings — it’s identity, atmosphere, and
            the future made visible.
          </p>
        </section>

        {/* Main content */}
        <section className={styles.content}>
          <div className={styles.left}>
            <div className={styles.profileCard}>
              <div className={styles.profileTop}>
                <div className={styles.avatar}>BM</div>

                <div>
                  <h2 className={styles.name}>Betsy Mugendi</h2>
                  <p className={styles.role}>Architect • Designer • Visionary</p>
                </div>
              </div>

              <p className={styles.bio}>
                Betsy Mugendi is an architect focused on modern, minimal, and
                futuristic spaces — designed with warmth, balance, and purpose.
                Her work blends clean geometry with bold lighting, natural
                textures, and thoughtful human-centered layouts.
              </p>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <h3>20+</h3>
                  <p>Concepts</p>
                </div>

                <div className={styles.stat}>
                  <h3>10+</h3>
                  <p>Projects</p>
                </div>

                <div className={styles.stat}>
                  <h3>5+</h3>
                  <p>Years</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>Design Philosophy</h2>
              <p className={styles.sectionText}>
                Every project begins with one question: what should this space
                make people feel? The goal is not just beauty — but function,
                clarity, and long-term value.
              </p>
            </div>

            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>What I Value</h2>

              <ul className={styles.list}>
                <li>Minimal but expressive design</li>
                <li>Warm modern finishes and lighting</li>
                <li>Efficient layouts and usable space</li>
                <li>Strong presentation through 3D visualization</li>
                <li>Detail-driven drawings for construction</li>
              </ul>
            </div>

            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>Working Style</h2>
              <p className={styles.sectionText}>
                I work closely with clients from concept to final drawings. The
                process is collaborative, transparent, and guided by clarity —
                so you always know what is happening and what comes next.
              </p>

              <a href="/contact" className={styles.contactButton}>
                Work With Betsy
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
