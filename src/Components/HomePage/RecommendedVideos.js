import React, { useState, useEffect } from "react";
import "./Video.css";
import VideoCard from "./VideoCard";
import axios from "axios";
import { Link } from "react-router-dom";

function RecommendedVideos({ isCollapsed }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk"
      )
      .then((res) => {
        // console.log(res);
        setPosts(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={!isCollapsed ? "recommendedVideos" : "recommended-Videos"}>
      <div className="recommended-videos">
        {posts.map((post) => (
          <Link to={`/video/${post.id}`} key={Math.random()} 
           >
            <VideoCard
              isCollapsed={isCollapsed}
              image={post.snippet.thumbnails.high.url}
              title={post.snippet.title}
              views="55M"
              timestamp="2 years"
              channelImage=""
              channel={post.snippet.channelTitle}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
