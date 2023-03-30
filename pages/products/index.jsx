import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Product.module.css"

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=10")
    const data = await res.json()
    return {
        props: { products: data.products }
    }
}

export default function Index({ products }) {
    return (
        <>
            <Head>
                <title>Product | OranWiriya </title>
                <meta name="keywords" content="Oran,shop,sellcloths" />
            </Head>
            <h1>all product</h1>
            <div className={styles.container}>
                {products.map(item => (
                    <div key={item.id}>
                        <Link href={"/products/" + item.id}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <Image src={item.thumbnail} width={300} height={300} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}