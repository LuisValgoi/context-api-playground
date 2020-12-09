import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const THEMES = {
  light: {
    style: { padding: "1rem", background: "#E4E4E5" },
  },
  dark: {
    style: { padding: "1rem", background: "#B6B6B7" },
  },
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.light);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
