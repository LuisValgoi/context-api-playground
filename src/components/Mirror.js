import React from "react";
import { useCount } from "../context/Count";

import Container from "./Container";

const Mirror = () => {
  const { count } = useCount();

  return (
    <Container>
      <h1 style={{ marginTop: "0%" }}>Mirror</h1>
      <span>Value: {count}</span>
    </Container>
  );
};

export default Mirror;
