// Spalva.jsx
import React from "react";

function Spalva({ data }) {
  const sortedData = data.slice().sort((a, b) => a.color.localeCompare(b.color));

  return (
    <div>
      <h2>Rusiavimas pagal spalva</h2>
      {sortedData.map((item) => (
        <div key={item.id}>
          color: "{item.color}" | type:  "{item.type}" | name: "{item.name}"
        </div>
      ))}
    </div>
  );
}

export default Spalva;
