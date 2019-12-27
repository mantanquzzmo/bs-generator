import React, { useState } from "react";
import { getSentence } from "./modules/bullShit";

const App = () => {
  const [randomBs, setRandomBs] = useState(getSentence());
  const getNewBs = () => {
    setRandomBs(getSentence());
  };

  return (
    <div>
      <h1>{randomBs}</h1>
      <button onClick={getNewBs}>Tell me more...</button>
    </div>
  );
};

export default App;
