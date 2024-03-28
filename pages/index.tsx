import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Credit from "./credit";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js with replit</title>
        <meta name="description" content="Generated by replit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>&#128187; software development 2.0</h1>

        <p className={styles.description}>
          <code className={styles.code}>Next.js static deployment</code>
          <code className={styles.code}>AI powered software development</code>
        </p>

        <div className={styles.grid}>
          <Link href="/credit" className={styles.card}>
            <h2>&#128296; Credit</h2>
            <p>credit calculator</p>
          </Link>
          <Link href="/creditextended" className={styles.card}>
            <h2>&#129683; Credit v2</h2>
            <p>credit extended calculator</p>
          </Link>
          <Link href="/upload" className={styles.card}>
            <h2>&#129690; Upload</h2>
            <p>upload</p>
          </Link>
          <Link href="/debug" className={styles.card}>
            <h2>&#128295; Debug</h2>
            <p>debug</p>
          </Link>
          <Link href="/animation" className={styles.card}>
            <h2>&#128295; Animation</h2>
            <p>Animation</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
