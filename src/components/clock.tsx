import React from "react";
import AnalogClock from "./analog-clock";
import { TimeContext } from "./time-context";
import { ColorContext } from "./color-context";

const Clock: React.FC = () => {
  const now = React.useContext(TimeContext);
  const color = React.useContext(ColorContext);

  return <AnalogClock time={now} color={color} />;
};

export default Clock;
