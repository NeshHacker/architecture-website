import styles from '../styles/Projects.module.css'

type ProjectCardProps = {
  title: string
  location: string
  year: string
  category: string
  image: string
}

export default function ProjectCard({
  title,
  location,
  year,
  category,
  image,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.cardOverlay}></div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>

        <p className={styles.cardMeta}>
          <span>{category}</span>
          <span className={styles.dot}>•</span>
          <span>{location}</span>
          <span className={styles.dot}>•</span>
          <span>{year}</span>
        </p>

        <button className={styles.cardButton}>View Project</button>
      </div>
    </div>
  )
}
