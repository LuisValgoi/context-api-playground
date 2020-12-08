import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CounterContext.Provider value={{ count, setCount }}>{children}</CounterContext.Provider>;
}

export function useCount() {
  const context = useContext(CounterContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { count, setCount } = context;
  return { count, setCount };
}
