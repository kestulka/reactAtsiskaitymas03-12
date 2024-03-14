import React from "react";
import styles from "../Styles/vardas.module.css"

function Vardas({ data }) {
  const sortedData = data.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles["vardas-container"]}>
      <h2>Rusiavimas pagal varda</h2>
      {sortedData.map((item) => (
        <div key={item.id}>
          <b>name: "{item.name}"</b> | type: "{item.type}" | color: "{item.color}"
        </div>
      ))}
    </div>
  );
}

export default Vardas;
