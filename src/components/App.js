import React from "react";

import Counter from "./Counter";
import Mirror from "./Mirror";

import CountProvider from "../context/Count";
import ThemeProvider from "../context/Theme";
import ThemeSwitcher from "./ThemeSwitcher";

const App = () => {
  return (
    <div id="app">
      <ThemeProvider>
        <CountProvider>
          <ThemeSwitcher />
          <hr />
          <Counter />
          <hr />
          <Mirror />
        </CountProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
