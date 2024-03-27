import React from "react";

import ai from "./assets/images/ai.png";

export function App(): JSX.Element {
  return (
    <main>
      <h1>ALt</h1>
      <div className="text-3xl font-bold underline">Hello, React!</div>
      <img src={ai} />
    </main>
  );
}
