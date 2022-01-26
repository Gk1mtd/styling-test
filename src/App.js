import data from "./data.json";
import "./App.css";
import Profile from "./Profile";
import React from "react";

function App() {
  const [highliteGamer, setHighliteGamer] = React.useState(false);
  const [hightlightedStreamer, setHighlightedStreamer] = React.useState(false);
  return (
    <div className="App">
      <button onClick={() =>setHighliteGamer(!highliteGamer)}>Highlight Gamer</button>
      <button onClick={() =>setHighlightedStreamer(!hightlightedStreamer)}>Highlight Streamer</button>
      {data.map((person) => (
        <Profile isHiglitedGamer={highliteGamer} isHighlightedStreamer={hightlightedStreamer} {...person} />
      ))}
    </div>
  );
}

export default App;
