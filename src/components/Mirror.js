import React from "react";
import { useCount } from "../context/Count";

const Mirror = () => {
  const { count } = useCount();

  return (
    <>
      <h1>Mirror</h1>
      <span>Value: {count}</span>
    </>
  );
};

export default Mirror;
