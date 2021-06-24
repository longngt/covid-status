import styles from "./Region.module.scss";
import PropTypes from "prop-types";

export default function RegionTable({ props }) {
  return (
    <div className={styles.regionWrapper}>
      <div className={`${styles.box} ${styles.region}`}>{props.region}</div>
      <div className={styles.box}>{props.activeCases}</div>
      <div className={styles.box}>{props.recovered}</div>
      <div className={styles.box}>{props.totalInfected}</div>
    </div>
  );
}

RegionTable.propTypes = {
  region: PropTypes.string,
  activeCases: PropTypes.number,
  recovered: PropTypes.number,
  totalInfected: PropTypes.number,
};
