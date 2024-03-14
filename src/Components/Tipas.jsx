import React from 'react'

function Tipas( {data} ) {
    const sortedData = data.slice().sort((a, b) => a.type.localeCompare(b.type))
  return (
    <div>
        <h2>Rusiavimas pagal tipa</h2>
        {sortedData.map((item)=> (
            <div key = {item.id}>
                type: "{item.type}" | name: "{item.name}" | color: "{item.color}"
            </div>
        ))}
    </div>
  )
}

export default Tipas