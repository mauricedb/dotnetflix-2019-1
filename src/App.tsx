import React, { Suspense, StrictMode } from "react";
import "./App.css";
import Clock from "./components/clock";
// import Jokes from "./components/jokes";
import Loading from "./components/loading";

import { unstable_scheduleCallback, unstable_NormalPriority } from "scheduler";

const Jokes = React.lazy(() => import("./components/jokes"));

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(false);

  return (
    <StrictMode>
      <div>
        <Suspense fallback={<Loading />}>
          <Clock />
          <div>
            <label>
              <input
                type="checkbox"
                checked={displayJokes}
                // onChange={() => setDisplayJokes(!displayJokes)}
                onChange={() => {
                  unstable_scheduleCallback(unstable_NormalPriority, () =>
                    setDisplayJokes(!displayJokes)
                  );
                }}
              />
              Display jokes
            </label>
          </div>
          {displayJokes && <Jokes url="/api/jon-skeet.json" />}
        </Suspense>
      </div>
    </StrictMode>
  );
};

export default App;
