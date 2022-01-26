import React from "react";
import "./Profile.css";

function Profile({ name, isGamer, isHiglitedGamer, isHighlightedStreamer }) {
  return (
    <div
      className={`${isGamer ? "gamer" : "streamer"} ${
        isHiglitedGamer & isGamer && "highliteGamer"
      } ${isHighlightedStreamer & !isGamer &&  "highlightedStreamer"}`}
    >
      <h2>{name}</h2>
      {isGamer ? <p>Is a gamer!</p> : <p>Is a Streamer!</p>}
    </div>
  );
}

export default Profile;
