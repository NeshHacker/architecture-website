import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Navigation />

      <motion.div
        key={router.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Component {...pageProps} />
      </motion.div>

      <Footer />
      <WhatsAppButton />
    </>
  )
}