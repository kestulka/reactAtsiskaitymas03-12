import React from 'react'
import Laivas from "./Laivas"
import Sala from "./Sala"
import Valtis from "./Valtis"

function Jura(props) {
  return (
    <div>
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
  )
}

export default Jura