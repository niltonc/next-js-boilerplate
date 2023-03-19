import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import NextLogo from '../../../public/next.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Button>
          Button
        </Button>
        <Image
          src={NextLogo}
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={100}
          priority
        />
      </div>
    </main>
  )
}
