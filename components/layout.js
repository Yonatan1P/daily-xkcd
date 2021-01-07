import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title> Comic Tracker </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.titles}>
                    <Link href="/">
                        <a> Comic Tracker</a>
                    </Link>
                </h1>
                {children}
            </main>
        </div>
    )
}