import React from "react";

function PlayVideoRow({ videoImage, channelTitle, title }) {
  return (
    <div className="list">
      <div className="playlist-video-row">
        <img src={videoImage} alt={channelTitle}></img>
        <div>
          <h4>{title.slice(0,60)}</h4>
          <p>{channelTitle}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default PlayVideoRow;
