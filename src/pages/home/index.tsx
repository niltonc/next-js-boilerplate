import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Button>
          Button
        </Button>
        <TextInput
          label="Text Input"
          type="text"
          width="384px"
          height="48px"
          fontSize="16px"
        />
        <TextInput
          label="Password Input"
          type="password"
          width="384px"
          height="48px"
          fontSize="16px"
        />
      </div>
    </main>
  )
}
