import React from "react";
import AnalogClock from "./analog-clock";
import { TimeContext } from "./time-context";
import { ColorContext } from "./color-context";

const Clock: React.FC = () => {
  return (
    <TimeContext.Consumer>
      {now => (
        <ColorContext.Consumer>
          {color => <AnalogClock time={now} color={color} />}
        </ColorContext.Consumer>
      )}
    </TimeContext.Consumer>
  );
};

export default Clock;
