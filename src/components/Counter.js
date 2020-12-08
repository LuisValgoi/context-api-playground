import React from "react";

const Counter = () => {
  return (
    <>
      <h1>Counter</h1>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <span>Value: 0</span>
        <div style={{ display: "flex", marginLeft: "1%", flexDirection: "column" }}>
          <button style={{ width: "100%", textAlign: "center" }}>+</button>
          <button style={{ width: "100%", textAlign: "center" }}>-</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
