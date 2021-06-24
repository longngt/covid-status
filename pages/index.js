import { Layout } from "../components";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout heading="Home">
      <p className={styles.mainTitle}>Covid Web App</p>
      <p className={styles.subtitle}>
        This is the demo application for Next.JS
      </p>
      <p className={styles.author}>Author: Long Nguyen</p>
      <p className={styles.checkout}>
        The data resource belong to{" "}
        <a href="https://apify.com/zuzka/covid-in/api">here</a>!
      </p>
    </Layout>
  );
}
