import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import CheckIcon from '../../assets/svg/outline/action/plus.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Button>
          Button
        </Button>
        <Image
          src={CheckIcon}
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={100}
        />
      </div>
    </main>
  )
}
