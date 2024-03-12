import React from "react";
import Daiktas from "./Daiktas";
import data from "../data";
import styles from "../Styles/tvenkinys.module.css";

function Tvenkinys() {
  const poriniai = [];
  const neporiniai = [];
  data.forEach((item) => {
    if (item.id % 2 !== 0) {
      poriniai.push(item.name);
    } else {
      neporiniai.push(item.name);
    }
  });

  return (
    <div className={styles["tvenkinys-container"]}>
      <h2>Tvenkinys</h2>
      <Daiktas namePorinis={poriniai} nameNeporinis={neporiniai} />
    </div>
  );
}

export default Tvenkinys;
