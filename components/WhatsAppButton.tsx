import styles from "../styles/WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href="https://wa.me/254712388565"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}
