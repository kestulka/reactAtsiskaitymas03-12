import React from 'react'

function Gyventojai({ data, spalva }) {
    const filteredData = data.filter(item => item.color === spalva);

  return (
    <div>Gyventojai ({spalva})
    <ul>
        {filteredData.length > 0 ? (
            filteredData.map(item => (
                <li key={item.id}>{item.name}</li>
            ))
        ) : (
            data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))
        )
    }
    </ul>
    </div>
  )
}

export default Gyventojai