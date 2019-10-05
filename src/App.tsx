import React from "react";
import "./App.css";
import Clock from "./components/clock";
import Jokes from "./components/jokes";
import { TimeProvider } from "./components/time-context";
import { ColorProvider } from "./components/color-context";

const App: React.FC = () => {
  return (
    <ColorProvider>
      <TimeProvider interval={1000}>
        <Clock />
        <Jokes url="/api/jon-skeet.json" />
      </TimeProvider>
    </ColorProvider>
  );
};

export default App;
