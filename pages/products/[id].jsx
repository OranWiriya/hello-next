import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Detail.module.css"

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=10")
    const data = await res.json()
    const paths = data.products.map((item) => {
        return {
            params: { id: String(item.id) }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/" + id)
    const data = await res.json()
    return {
        props: { products: data }
    }
}

export default function ProductDetail({ products }) {
    return (
        <>
            <Head>
                <title>{products.title}</title>
            </Head>
            <div className={styles.container}>
                <div>
                    <Image src={products.thumbnail} width={300} height={300} alt={products.title}/>
                </div>
                <div className={styles.detail}>
                        <h1>Product name: {products.title}</h1>
                        <h2>Price: {products.price}</h2>
                        <h2>Category: {products.category}</h2>
                        <h2>Brand: {products.brand}</h2>
                        <p>Rating: {products.rating}</p>
                        <p>{products.description}</p>
                </div>
            </div>

        </>
    )
}