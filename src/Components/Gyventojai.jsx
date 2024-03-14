// Gyventojai.jsx
import React from "react";

function Gyventojai({ data, spalva }) {
  // Filter data based on the specified color
  const filteredData = data.filter(item => item.color === spalva);
  
  return (
    <div>
      <h2>Gyventojai ({spalva})</h2>
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <li key={item.id}>
              <span style={{ color: item.color }}>{item.name}</span>
            </li>
          ))
        ) : (
          data.map(item => (
            <li key={item.id}>
              <span style={{ color: item.color }}>{item.name}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Gyventojai;
