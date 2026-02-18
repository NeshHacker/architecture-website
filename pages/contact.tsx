import Head from 'next/head'
import { useState } from 'react'
import styles from '@/styles/Contact.module.css'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  // Replace this with Betsy's real WhatsApp number (international format, no +) after she sends me
  // Example Kenya: 2547XXXXXXXX
  const whatsappNumber = '254758421984'

  const whatsappText = `Hello Betsy, my name is ${name || '...'}.
I’m interested in working with you.

Email: ${email || '...'}
Phone: ${phone || '...'}

Message:
${message || '...'}`

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`

  return (
    <>
      <Head>
        <title>Contact | Betsy Mugendi Architecture</title>
      </Head>

      <main className={styles.page}>
        {/* Header */}
        <section className={styles.header}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.subtitle}>
            Let’s talk about your project. Send a message or reach out directly
            via WhatsApp.
          </p>
        </section>

        <section className={styles.layout}>
          {/* Left: Contact Form */}
          <div className={styles.formCard}>
            <h2 className={styles.cardTitle}>Send a Message</h2>
            <p className={styles.cardDesc}>
              Fill in your details and describe what you want to build.
            </p>

            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault()
                alert(
                  'Form backend not added yet. For now, use the WhatsApp button to send the message.'
                )
              }}
            >
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name</label>
                  <input
                    className={styles.input}
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input
                    className={styles.input}
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Phone</label>
                  <input
                    className={styles.input}
                    placeholder="07xx xxx xxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Project Type</label>
                  <select className={styles.input}>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Interior Design</option>
                    <option>Renovation</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className={styles.actions}>
                <button className={styles.submitButton} type="submit" disabled>
                  Send (Email Backend Coming Soon)
                </button>

                <a
                  className={styles.whatsappButton}
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Send on WhatsApp
                </a>
              </div>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3>Location</h3>
              <p>Nairobi, Kenya</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Email</h3>
              <p>betsymugendi@gmail.com</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Phone</h3>
              <p>+254 712 388 565</p>
            </div>

            <div className={styles.bigQuote}>
              <p>
                “Architecture is the art of shaping space — not just for today,
                but for the future.”
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
