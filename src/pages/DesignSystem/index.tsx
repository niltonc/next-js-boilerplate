import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import CheckIcon from "../../assets/svg/outline/action/check.svg";
import NextLogo from '../../../public/next.svg'
export default function Home() {
  return (
    <>
      <Head>
        <title>Design System Components</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Button>Button</Button>
          <Image
            className={styles.logo}
            src={NextLogo}
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <Image
            className={styles.logo}
            src={CheckIcon}
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  )
}