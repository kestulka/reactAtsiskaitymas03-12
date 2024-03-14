import React from 'react'
import Tipas from "./Tipas"
import Vardas from "./Vardas"
import Spalva from './Spalva'
import data from "../data"



function Vandenynas() {
  return (
    <div>
        <Tipas data = {data} />
        <Vardas data = {data} />
        <Spalva data = {data} />
    </div>
  )
}

export default Vandenynas