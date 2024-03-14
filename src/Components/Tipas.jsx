import React from 'react'
import styles from "../Styles/tipas.module.css"

function Tipas( {data} ) {
    const sortedData = data.slice().sort((a, b) => a.type.localeCompare(b.type))
  return (
    <div className={styles["tipas-container"]}>
        <h2>Rusiavimas pagal tipa</h2>
        {sortedData.map((item)=> (
            <div key = {item.id}>
                <b>type: "{item.type}"</b> | name: "{item.name}" | color: "{item.color}"
            </div>
        ))}
    </div>
  )
}

export default Tipas