import React from "react";
import styles from "../Styles/spalva.module.css"

function Spalva({ data }) {
  const sortedData = data.slice().sort((a, b) => a.color.localeCompare(b.color));

  return (
    <div className={styles["spalva-container"]}>
      <h2>Rusiavimas pagal spalva</h2>
      {sortedData.map((item) => (
        <div key={item.id}>
          <b>color: "{item.color}"</b> | type:  "{item.type}" | name: "{item.name}"
        </div>
      ))}
    </div>
  );
}

export default Spalva;
