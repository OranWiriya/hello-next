import styles from "@/styles/About.module.css"
import Head from "next/head"
import Image from "next/image"

function about() {
    return (
        <>
            <Head>
                <title>About | OranWiriya </title>
                <meta name="keywords" content="Oran,shop,sellcloths" />
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>About</h1>
                <Image src="/about.svg" width={400} height={400} alt="image2" />
            </div>
        </>
    )
}

export default about