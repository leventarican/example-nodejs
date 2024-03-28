import styles from "../styles/Home.module.css";

const Animation: React.FC = () => {
  const numberOfStars = 100; // Increased number of stars for a better effect

  const stars = Array.from({ length: numberOfStars }).map((_, index) => (
    <div
      key={index}
      className={styles.star}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${Math.random() * 3 + 2}s`, // Ranges from 2 to 5 seconds
      }}
    ></div>
  ));

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>&#128295; Animation</h1>
      <p className={styles.description}>
        This is the animation page with CSS animations of stars twinkling in the
        universe.
      </p>
      <div className={styles.animation}>{stars}</div>
    </div>
  );
};

export default Animation;
