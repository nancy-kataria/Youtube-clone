import React, { useEffect, useState } from "react";
import "./playlist.css";
import axios from "axios";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import ShuffleSharpIcon from "@material-ui/icons/ShuffleSharp";
import ReplySharpIcon from "@material-ui/icons/ReplySharp";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
import PublicSharpIcon from "@material-ui/icons/PublicSharp";
import LinkSharp from "@material-ui/icons/LinkSharp";
import LockSharp from "@material-ui/icons/LockSharp";
import PlayVideoRow from "./PlayVideoRow";

function PlaylistPage() {
  const [age, setAge] = useState("");
  const [videos, setVideos] = useState([])

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    axios
    .get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=45&playlistId=PLLhj5zqbwUGDKSy1SHMamkyAqquLVmXyn&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk`)
    .then((res) => {
      setVideos(res.data.items)
    })
  },[])

  return (
    <div className="playlist-page">
      <div className="playlist">
        <img
          src="https://i.ytimg.com/vi/DTcl4rbSnho/maxresdefault.jpg"
          alt="Hindi"
        ></img>
        <div className="playlist-name">
          <h4>Hindi</h4>
          <EditOutlinedIcon />
        </div>
        <p>45 videos • 67 views</p>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em><PublicSharpIcon /> Public</em>
          </MenuItem>
          <MenuItem value={10}><LinkSharp /> Unlisted</MenuItem>
          <MenuItem value={20}><LockSharp/> Private</MenuItem>
        </Select>
        <div className="playlist-icons">
            <ShuffleSharpIcon className="p-icons" />
            <ReplySharpIcon className="p-icons" />
            <MoreHorizSharpIcon className="p-icons" />
        </div>
        <div className="playlist-description">
            <p>A few melodious Bollywood songs</p>
            <EditOutlinedIcon />
        </div>
        <hr></hr>
      </div>
      <div className="playlist-videos">
        {
          videos.slice(4,40).map((video) => (
            <PlayVideoRow 
            videoImage={video.snippet.thumbnails.high.url}
            channelTitle={video.snippet.videoOwnerChannelTitle}
            title={video.snippet.title} />
          ))
        }
      </div>
    </div>
  );
}

export default PlaylistPage;
