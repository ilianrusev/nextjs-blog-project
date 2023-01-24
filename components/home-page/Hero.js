import Image from "next/image";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/me.JPG"
          alt="image showing iliyan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Iliyan</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
