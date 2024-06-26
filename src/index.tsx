import React from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import { App } from "./App";

const container = document.getElementById("root");
if (container === null)
  throw new Error("No root element found in the document");
const root = createRoot(container);
root.render(<App />);
