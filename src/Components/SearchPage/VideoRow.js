import React, { useEffect, useState } from "react";
import axios from "axios";
import MusicNoteSharpIcon from "@material-ui/icons/MusicNoteSharp";
import { Avatar } from "@material-ui/core";

function VideoRow({
  views,
  description,
  timestamp,
  channel,
  title,
  image,
  channelId
}) {
  const [channelPosts, setChannelPosts] = useState([]);
  let channelImage = "";

  useEffect(() => { // Channel API
    const getChannelData = () =>{
      axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk`
      )
      .then((res) => {
        // console.log(res);
        setChannelPosts(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    if(channelId){
      getChannelData()
    }
  }, [channelId]);

  channelPosts.forEach((post) => { // to access the data of a particular channel to render on the video card
    if (post.snippet.thumbnails.high.url) {
      channelImage = post.snippet.thumbnails.high.url;
    }
  });

  return (
    <div className="videoRow">
      <img src={image} alt={channel} />
      <div className="videoRow-text">
        <h3>{title.slice(0, 60)}</h3>
        <p className="videoRow-headline">
          {views} views • {timestamp} ago
        </p>
        <div>
          <Avatar className="channelImage" src={channelImage} />
          <h5>
            {channel} <MusicNoteSharpIcon fontSize="small" />
          </h5>
        </div>
        <p className="videoRow-headline">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
