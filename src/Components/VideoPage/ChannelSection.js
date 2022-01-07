import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";

function ChannelSection({ channelTitle, channelId }) {
  const [posts, setPosts] = useState([]);
  let channelImage =''

  useEffect(()=>{
    const getChannelData = () =>{
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk`
        )
        .then((res) => {
          // console.log(res);
          setPosts(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if(channelId){
      getChannelData()
    }
  },[channelId])

  posts.forEach((post) => {
    if (post.snippet.thumbnails.high.url) {
      channelImage = post.snippet.thumbnails.high.url;
    }
  });

  return (
    <div className="channel-title">
      <div className="channel-section">
        <Avatar className="video-Avatar" src={channelImage} />
        <div className="name">
          <h4>{channelTitle}</h4>
          <p>4.26M subscribers</p>
        </div>
      </div>
      <Button className="subscribeButton" variant="contained">
        Subscribe
      </Button>
    </div>
  );
}

export default ChannelSection;
