import ApifyClient from "apify-client";
import dateFormat from "dateformat";
import { Layout } from "../components";
import styles from "../styles/Status.module.scss";

export default function Status({ data }) {
  return (
    <Layout heading="Status">
      <div className={styles.statusWrapper}>
        <div className={styles.box}>
          <p className={styles.title}>Active Cases</p>
          <p className={styles.active}>{data.activeCases}</p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>Deaths</p>
          <p className={styles.death}>{data.deaths}</p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>Recovers</p>
          <p className={styles.recover}>{data.recovered}</p>
        </div>
      </div>
      <div className={styles.total}>
        <p className={styles.title}>Total</p>
        <p className={styles.totalData}>{data.totalCases}</p>
      </div>

      <div className={styles.update}>
        <p>Last update at</p>
        <p>
          {(() => {
            const date = new Date(data.lastUpdatedAtApify);
            const convertedDate = dateFormat(date, "DDDD, mmmm yyyy");
            return convertedDate;
          })()}
        </p>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  // Initialize the ApifyClient with API token
  const client = new ApifyClient({
    token: "aEcdP2m65wz6uwLtEqKMeErWP",
  });

  const input = {
    email: "zuzka@apify.com",
  };

  // Run the actor and wait for it to finish
  const run = await client.actor("zuzka/covid-in").call(input);

  // Fetch and print actor results from the run's dataset (if any)

  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  const data = items[0];

  return {
    props: {
      data,
    },
  };
};
