import React from "react";
import MusicNoteSharpIcon from "@material-ui/icons/MusicNoteSharp";
import { Avatar } from "@material-ui/core";

function VideoRow({
  views,
  description,
  timestamp,
  channel,
  title,
  image,
  channelImage,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt={channel} />
      <div className="videoRow-text">
        <h3>{title}</h3>
        <p className="videoRow-headline">
          {views} views • {timestamp} ago
        </p>
        <div>
          <Avatar className='channelImage' src={channelImage} />
          <h5>
            {channel} <MusicNoteSharpIcon fontSize='small' />
          </h5>
        </div>
        <p className="videoRow-headline">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
