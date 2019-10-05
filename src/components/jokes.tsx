import React, { Component } from "react";
import Loading from "./loading";

type Joke = { id: number; joke: string };

const initialState = { jokes: [] as Joke[], loading: true };

type JokesProps = { url: string };
type JokesState = typeof initialState;

const useJokes = (url: string): JokesState => {
  const [{ jokes, loading }, setState] = React.useState(initialState);

  React.useEffect(() => {
    const fetchJokes = async () => {
      const rsp = await fetch(url);
      const jokes = await rsp.json();
      setState({ jokes, loading: false });
    };
    fetchJokes();
  }, [url]);

  return { loading, jokes };
};

const Jokes: React.FC<JokesProps> = ({ url }) => {
  const { loading, jokes } = useJokes(url);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Jon Skeet Jokes</h2>
      <ul>
        {jokes.map(item => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default Jokes;
