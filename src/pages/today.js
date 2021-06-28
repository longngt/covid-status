import ApifyClient from "apify-client";
import dateFormat from "dateformat";
import { Layout } from "../components";
import styles from "../../styles/Today.module.scss";

export default function Today({ data }) {
  return (
    <Layout heading="Today">
      <div className={styles.todayWrapper}>
        <div className={styles.box}>
          <p className={styles.title}>Today Active Cases</p>
          <p className={styles.active}>{data.activeCasesNew}</p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>Today Deaths</p>
          <p className={styles.death}>{data.deathsNew}</p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>Today Recovers</p>
          <p className={styles.recover}>{data.recoveredNew}</p>
        </div>
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
