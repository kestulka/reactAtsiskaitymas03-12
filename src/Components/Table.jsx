import React from "react";
import data from "../data";
import styles from "../Styles/table.module.css";

function Table() {
  // pildom lentele
  const generateRows = () => {
    // pereinam data array ir sukuriam eilute kiekvienam itemui
    return data.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.type}</td>
        <td>{item.name}</td>
        <td>{item.color}</td>
      </tr>
    ));
  };
  // Grazinam lentele su struktura
  return (
    <div className={styles["table-container"]}>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th colSpan="4" className={styles["table-header"]}>
              Data table
            </th>
          </tr>
          <tr>
            <th>id:</th>
            <th>type:</th>
            <th>name:</th>
            <th>color:</th>
          </tr>
        </thead>
        <tbody>{generateRows()}</tbody>
      </table>
    </div>
  );
}

export default Table;
