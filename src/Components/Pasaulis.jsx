import React from 'react'
import Gyventojai from "./Gyventojai"
import data from "../data"
import styles from "../Styles/pasaulis.module.css"

function Pasaulis() {
  return (
    <div>
        <h1 className={styles["pasaulis-container-header"]}>Pasaulis</h1>
        <Gyventojai data={data} spalva="green" />
        <Gyventojai data={data} spalva="yellow" />
        <Gyventojai data={data} spalva="red" />
        <Gyventojai data={data} spalva="blue" />
    </div>
  )
}

export default Pasaulis