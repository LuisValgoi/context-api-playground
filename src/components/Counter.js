import React from "react";
import { useCount } from "../context/Count";

import Container from "./Container";

const Counter = () => {
  const { count, setCount } = useCount();

  return (
    <Container>
      <h1 style={{ marginTop: "0%" }}>Counter</h1>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <span>Value: {count}</span>
        <div style={{ display: "flex", marginLeft: "1%", flexDirection: "column" }}>
          <button onClick={() => setCount(count + 1)} style={{ width: "100%", textAlign: "center" }}>
            +
          </button>
          <button onClick={() => setCount(count - 1)} style={{ width: "100%", textAlign: "center" }}>
            -
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Counter;
