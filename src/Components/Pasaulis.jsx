import React from 'react'
import Gyventojai from "./Gyventojai"
import data from "../data"

function Pasaulis() {
  return (
    <div>
        <h1>Pasaulis</h1>
        <Gyventojai data={data} spalva="green" />
        <Gyventojai data={data} spalva="yellow" />
        <Gyventojai data={data} spalva="red" />
        <Gyventojai data={data} spalva="blue" />
    </div>
  )
}

export default Pasaulis