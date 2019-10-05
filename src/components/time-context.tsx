import React from "react";

export const TimeContext = React.createContext(new Date());

type Props = {
  interval: number;
};

export const TimeProvider: React.FC<Props> = ({ interval, children }) => {
  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const handle = setInterval(() => {
      setNow(new Date());
    }, interval);
    return () => clearInterval(handle);
  }, [interval]);

  return <TimeContext.Provider value={now}>{children}</TimeContext.Provider>;
};
