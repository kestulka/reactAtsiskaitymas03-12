import React from 'react'
import Laivas from "./Laivas"
import Sala from "./Sala"
import Valtis from "./Valtis"
import styles from "../Styles/jura.module.css"

function Jura(props) {
  return (
    <>
    <h2 className={styles["jura-container-header"]}>Jura</h2>
    <div className={styles["jura-container"]}>
      {props.data.map((item) => {
        switch (item.type) {
          case "man":
            return <Valtis key={item.id} name={item.name} />
          case "car":
            return <Laivas key={item.id} name={item.name} />
          case "animal":
            return <Sala key={item.id} name={item.name} />
          case "fish":
            return <p key={item.id}>{item.name} (type: "fish")</p>
          default:
            return null;
        }
      })}
    </div>
    </>
  )
}

export default Jura