import React from "react";
import Table from "./Components/Table";
import Tvenkinys from "../src/Components/Tvenkinys";
import Jura from "./Components/Jura"
import data from "./data"

const App = () => {
  return (
    <div className="App">
      <>
        <Table />
        <Tvenkinys />
        <Jura data={data} />
      </>
    </div>
  );
};

export default App;
