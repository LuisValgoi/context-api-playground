import React from "react";
import { useTheme } from "../context/Theme";

export default function Container(props) {
  const { theme } = useTheme();
  return <div style={theme.style}>{props.children}</div>;
}
