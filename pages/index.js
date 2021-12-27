import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quia soluta molestias repellat blanditiis inventore autem sint et facilis adipisci nemo quibusdam explicabo at accusamus. Ratione amet quidem laboriosam error!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quia soluta molestias repellat blanditiis inventore autem sint et facilis adipisci nemo quibusdam explicabo at accusamus. Ratione amet quidem laboriosam error!</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}
