import ApifyClient from "apify-client";
import dateFormat from "dateformat";
import { Layout } from "../components";
import styles from "../../styles/Status.module.scss";
import { useSelector } from "react-redux";

export default function Status() {
  const status = useSelector((state) => state.status);
  console.log("status: ", status);
  return (
    <Layout heading="Status">
      {/* <div className={styles.statusWrapper}>
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
      </div> */}
    </Layout>
  );
}
