import Image from 'next/image'
import styles from './page.module.scss'
import { TopBar } from './components/TopBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <TopBar />
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Button>TEST</Button>
      </div>
    </main>
  )
}
