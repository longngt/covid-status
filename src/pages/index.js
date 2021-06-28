import { Layout } from "../components";
import styles from "../../styles/Home.module.scss";
import fetchDataFromApify from "../api";
import store from "../store/store";
import { loadingBegin, loadingSucceeded, loadingFailed } from "../actions";
import { useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state.status.data);
  console.log(data);
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

export const getServerSideProps = async (context) => {
  store.dispatch(loadingBegin());
  try {
    const data = await fetchDataFromApify();
    store.dispatch(loadingSucceeded(data));
  } catch (error) {
    store.dispatch(loadingFailed(error));
  }
  return {
    props: {},
  };
};
