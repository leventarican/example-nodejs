import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const DebugPage: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Debug Page</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>&#128295; Debug</h1>

        <p className={styles.description}>
          <code className={styles.code}>todo</code>
        </p>

        <p className={styles.description}>
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            .split(" ")
            .map((word, index) => (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  marginRight: "5px",
                  opacity: 0,
                  animation: `fadeInWord 0.5s ease-in-out 0.${index}s forwards`,
                }}
              >
                {word}
              </span>
            ))}
        </p>
        <style jsx>{`
          @keyframes fadeInWord {
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
      </main>
    </div>
  );
};

export default DebugPage;
