import React from "react";

export type Colors = "blue" | "black" | "red";
export const ColorContext = React.createContext<Colors>("black");

type Props = {};

export const ColorProvider: React.FC<Props> = ({ children }) => {
  const [color, setColor] = React.useState<Colors>("black");

  return (
    <ColorContext.Provider value={color}>
      <div>
        <label>Color:&nbsp;</label>
        <select
          value={color}
          onChange={e => setColor(e.target.value as Colors)}
        >
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
      </div>

      <div>{children}</div>
    </ColorContext.Provider>
  );
};
