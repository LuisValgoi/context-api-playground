import React from "react";

import Counter from "./Counter";
import Mirror from "./Mirror";
import CountProvider from "../context/Count";

const App = () => {
  return (
    <div id="app">
      <CountProvider>
        <Counter />
        <hr />
        <Mirror />
      </CountProvider>
    </div>
  );
};

export default App;
