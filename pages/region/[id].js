import styles from "./RegionPage.module.scss";
import ApifyClient from "apify-client";
import { Layout } from "../../components";
import { useState } from "react";

export default function RegionPage({ regionData }) {
  console.log(regionData[0]);
  const [detail, setDetail] = useState(regionData[0]);
  return (
    <Layout heading="Region Details">
      <div className={styles.name}>{detail.region}</div>
      <div className={styles.detail}>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.title}>Active Cases</div>
            <div className={styles.data}>{detail.activeCases}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>Deceased</div>
            <div className={styles.data}>{detail.deceased}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>New Deceased</div>
            <div className={styles.data}>{detail.newDeceased}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>Total Infected</div>
            <div className={`${styles.data} ${styles.totalData}`}>
              {detail.totalInfected}
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.title}>New Infected</div>
            <div className={styles.data}>{detail.newInfected}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>New Recovered</div>
            <div className={styles.data}>{detail.newRecovered}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>Recovered</div>
            <div className={styles.data}>{detail.recovered}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
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
  const paths = data.regionData.map((region) => {
    return { params: { id: region.region.toLowerCase().split(" ").join("") } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
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
  const regionData = data.regionData.filter(
    (region) => region.region.toLowerCase().split(" ").join("") == params.id
  );

  return {
    props: {
      regionData,
    },
  };
};
