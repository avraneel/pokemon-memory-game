import { useState } from "react";

import Heading from "./Heading";
import Scoreboard from "./Scoreboard";
import CardGrid from "./CardGrid";

import "../styles/app.css";

export default function App() {
  const [stack, setStack] = useState([]);

  return (
    <div className="app">
      <Heading />
      <Scoreboard />
      <CardGrid />
    </div>
  );
}
