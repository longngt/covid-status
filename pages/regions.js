import { Layout, Region } from "../components";
import ApifyClient from "apify-client";
import styles from "../styles/Regions.module.scss";

export default function Regions({ data }) {
  return (
    <Layout heading="Regions">
      <div className={styles.inputWrapper}>
        <div className={styles.inputContent}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            className={`svg-inline--fa fa-search fa-w-16 ${styles.searchIcon}`}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
          <input type="text" placeholder="Try a region here..."></input>
        </div>
      </div>
      <div className={styles.regionsTable}>
        <div className={styles.tableHeadingWrapper}>
          <div className={styles.tableHeading}>Region</div>
          <div className={styles.tableHeading}>Active Cases</div>
          <div className={styles.tableHeading}>Recovered</div>
          <div className={styles.tableHeading}>Total Infected</div>
        </div>
        {data.regionData.map((region) => {
          return <Region props={region} key={region.region}></Region>;
        })}
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
