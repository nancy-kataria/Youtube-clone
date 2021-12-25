import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
// import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import axios from "axios";

function SearchPage({ isCollapsed, pathName }) {
  const [posts, setPosts] = useState([]);
  let searchTerm = pathName.trim()

  // if(pathName.includes(' ')){
    
  // }

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchTerm}&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk`
      )
      .then((res) => {
        console.log(res);
        setPosts(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={!isCollapsed ? "searchPage" : "search-Page"}>
      <div className="searchPage-filter">
        <TuneOutlinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr />
      {/* <ChannelRow
        image="https://yt3.ggpht.com/cWcaoomTkp5YMbMA9v7eNU42Lna4lYk7gidKzUA7K0bP5WL3WIgvT-oV1hxdXfsZoSKXBkr84Q=s900-c-k-c0x00ffffff-no-rj"
        channel="The PropheC"
        verified
        subs="558K"
        noOfVideos={56}
        description="The Official Youtube Channel of The PropheC"
      /> */}
      <hr />
      {posts.map((post) => (
        <VideoRow
          views="3M"
          description={post.snippet.description}
          timestamp="3 days"
          channel={post.snippet.channelTitle}
          title={post.snippet.title}
          image={post.snippet.thumbnails.high.url}
          channelImage="https://yt3.ggpht.com/cWcaoomTkp5YMbMA9v7eNU42Lna4lYk7gidKzUA7K0bP5WL3WIgvT-oV1hxdXfsZoSKXBkr84Q=s900-c-k-c0x00ffffff-no-rj"
          key = {Math.random()}
        />
      ))}
    </div>
  );
}

export default SearchPage;