import React from "react";
import { useTheme, THEMES } from "../context/Theme";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <>
      <h1>Change Theme</h1>
      <button onClick={() => setTheme(THEMES.light)}>Light</button>
      <button onClick={() => setTheme(THEMES.dark)}>Dark</button>
    </>
  );
}
