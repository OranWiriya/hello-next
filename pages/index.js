import styles from "@/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page | OranWiriya </title>
        <meta name="keywords" content="Oran,shop,sellcloths"/>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home page</h1>
        <Image src="/shopping.svg" width={400} height={400} alt="image1"/>
        <p>Welcome to my shop</p>
        <Link href="/products" className={styles.btn}>all my products</Link>
      </div>
    </>
  )
}
