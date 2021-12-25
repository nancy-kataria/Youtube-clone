import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VideoPage.css";
import ChannelSection from "./ChannelSection";
import SuggestionSection from "./SuggestionSection";
import TitleSection from "./TitleSection";
import CommentsSection from "./CommentsSection";
import { Avatar, TextField } from "@material-ui/core";
import SortSharpIcon from "@material-ui/icons/SortSharp";

function VideoPage({ videoImage, channelTitle, description, title, tags }) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&regionCode=IN&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk"
      )
      .then((res) => {
        setPosts(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&order=relevance&textFormat=plainText&videoId=5HVoUNiSee8&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk"
      )
      .then((res) => {
        // console.log(res)
        setComments(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="video-page">
      <div className="video-section">
        <img className="video-image" src={videoImage} alt={channelTitle} />
        <TitleSection title={title} tags={tags} />
        <hr></hr>
        <ChannelSection channelTitle={channelTitle} description={description} />
        <div className="description">
          <p>{description.slice(0, 310)}</p>
        </div>
        <hr></hr>
        <div className="sort-comments">
        <p>48,548 comments</p>
        <SortSharpIcon className="sort-icon" />
        <h5>SORT BY</h5>
        </div>
        <div className="comment-area">
        <Avatar src='' />
        <TextField className='textfield' id="standard-basic" label="Add a public comment" variant="standard" />
        </div>
        <div className="comment-section">
          {comments.map((comment) => (
            <CommentsSection
              profileImage={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
              authorName={comment.snippet.topLevelComment.snippet.authorDisplayName}
              text={comment.snippet.topLevelComment.snippet.textOriginal}
              likes={comment.snippet.likeCount}
              key={Math.random()}
            />
          ))}
        </div>
      </div>
      <div className="suggestion-section">
        {posts.map((post) => (
          <SuggestionSection
            videoImage={post.snippet.thumbnails.high.url}
            title={post.snippet.title}
            channelTitle={post.snippet.channelTitle}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoPage;
