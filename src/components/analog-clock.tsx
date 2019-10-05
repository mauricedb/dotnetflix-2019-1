import React from "react";
import classes from "./analog-clock.module.css";
import { Colors } from "./color-context";

const fallbackDate = new Date(2000, 0, 1, 0, 20, 40);

type HourHandProps = {
  time: Date;
};
const HourHand: React.FC<HourHandProps> = ({ time }) => {
  const min = time.getMinutes();
  const hour = (time.getHours() % 12) + min / 60;
  const hourangle = hour * 30;

  return (
    <line
      className={classes["analog-clock-hourhand"]}
      x1="50"
      y1="50"
      x2="50"
      y2="24"
      transform={`rotate(${hourangle}, 50, 50)`}
    />
  );
};

type MinuteHandProps = {
  time: Date;
};
const MinuteHand: React.FC<MinuteHandProps> = ({ time }) => {
  const min = time.getMinutes();
  const minangle = min * 6;

  return (
    <line
      className={classes["analog-clock-minutehand"]}
      x1="50"
      y1="50"
      x2="50"
      y2="20"
      transform={`rotate(${minangle}, 50, 50)`}
    />
  );
};

type SecondHandProps = {
  time: Date;
};
const SecondHand: React.FC<SecondHandProps> = ({ time }) => {
  const sec = time.getSeconds();
  const secangle = sec * 6;

  return (
    <line
      className={classes["analog-clock-secondhand"]}
      x1="50"
      y1="50"
      x2="50"
      y2="16"
      transform={`rotate(${secangle}, 50, 50)`}
    />
  );
};

type AnalogClockProps = {
  time?: Date;
  color?: Colors;
};

// From https://gist.github.com/janx/1188550
const AnalogClock: React.FC<AnalogClockProps> = ({
  time = fallbackDate,
  color = "black"
}) => {
  const style = { stroke: color };

  return (
    <svg
      className={classes["analog-clock"]}
      viewBox="0 0 100 100"
      width="200"
      height="200"
    >
      {/* the clock face */}
      <circle
        className="analog-clock-face"
        cx="50"
        cy="50"
        r="45"
        style={style}
      />

      <g className={classes["analog-clock-ticks"]} style={style}>
        {/* 12 hour tick marks */}
        <line x1="50" y1="5.000" x2="50.00" y2="10.00" />
        <line x1="72.50" y1="11.03" x2="70.00" y2="15.36" />
        <line x1="88.97" y1="27.50" x2="84.64" y2="30.00" />
        <line x1="95.00" y1="50.00" x2="90.00" y2="50.00" />
        <line x1="88.97" y1="72.50" x2="84.64" y2="70.00" />
        <line x1="72.50" y1="88.97" x2="70.00" y2="84.64" />
        <line x1="50.00" y1="95.00" x2="50.00" y2="90.00" />
        <line x1="27.50" y1="88.97" x2="30.00" y2="84.64" />
        <line x1="11.03" y1="72.50" x2="15.36" y2="70.00" />
        <line x1="5.000" y1="50.00" x2="10.00" y2="50.00" />
        <line x1="11.03" y1="27.50" x2="15.36" y2="30.00" />
        <line x1="27.50" y1="11.03" x2="30.00" y2="15.36" />
      </g>

      <g className={classes["analog-clock-numbers"]} style={style}>
        {/* Number the cardinal directions */}
        <text x="50" y="18">
          12
        </text>
        <text x="85" y="53">
          3
        </text>
        <text x="50" y="88">
          6
        </text>
        <text x="15" y="53">
          9
        </text>
      </g>

      <g className={classes["analog-clock-hands"]} style={style}>
        {/* Draw hands */}
        <HourHand time={time} />
        <MinuteHand time={time} />
        <SecondHand time={time} />
      </g>
    </svg>
  );
};

export default AnalogClock;
