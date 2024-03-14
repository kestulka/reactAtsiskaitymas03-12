// Vardas.jsx
import React from "react";

function Vardas({ data }) {
  const sortedData = data.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h2>Rusiavimas pagal varda</h2>
      {sortedData.map((item) => (
        <div key={item.id}>
          name: "{item.name}" | type: "{item.type}" | color: "{item.color}"
        </div>
      ))}
    </div>
  );
}

export default Vardas;
