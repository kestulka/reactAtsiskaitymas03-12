import React from "react";
import styles from "../Styles/daiktas.module.css";

function Daiktas(props) {
  return (
    <div className={styles["daiktas-container"]}>
      {/* join naudojamas tarpams tarp zodziu */}
      <p className={styles["daiktas"]}>
        name(poriniai): {props.namePorinis.join(", ")}{" "}
      </p>
      <p className={styles["daiktas"]}>
        name(neporiniai): {props.nameNeporinis.join(", ")}{" "}
      </p>
    </div>
  );
}

export default Daiktas;
