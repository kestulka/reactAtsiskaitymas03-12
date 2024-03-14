import React from "react";
import Table from "./Components/Table";
import Tvenkinys from "../src/Components/Tvenkinys";
import Jura from "./Components/Jura"
import data from "./data"
import Vandenynas from "./Components/Vandenynas";
import Pasaulis from "./Components/Pasaulis"

const App = () => {
  return (
    <div className="App">
      <>
        <Table />
        <Tvenkinys />
        <Jura data={data} />
        <Vandenynas />
        <Pasaulis />
      </>
    </div>
  );
};

export default App;
