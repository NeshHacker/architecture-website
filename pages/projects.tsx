import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Skyline Villa',
      location: 'Nairobi, Kenya',
      year: '2025',
      category: 'Residential',
      image: '/images/projects/villa.jpeg',
    },
    {
      title: 'Warm Minimal Interior',
      location: 'Kiambu, Kenya',
      year: '2024',
      category: 'Interior Design',
      image: '/images/projects/interior.jpeg',
    },
    {
      title: 'Modern Commercial Hub',
      location: 'Mombasa, Kenya',
      year: '2023',
      category: 'Commercial',
      image: '/images/projects/commercial.jpeg',
    },
    {
      title: 'Urban Planning Concept',
      location: 'Machakos, Kenya',
      year: '2022',
      category: 'Urban Design',
      image: '/images/projects/urban.jpeg',
    },
  ]

  return (
    <>
      <Head>
        <title>Projects | Betsy Mugendi Architecture</title>
      </Head>

      <main className={styles.page}>
        <section className={styles.header}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            A selection of architectural work, interior design, and concepts —
            built with precision and vision.
          </p>
        </section>

        <section className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </section>
      </main>
    </>
  )
}
