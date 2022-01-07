import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VideoPage.css";
import ChannelSection from "./ChannelSection";
import SuggestionSection from "./SuggestionSection";
import TitleSection from "./TitleSection";
import CommentsSection from "./CommentsSection";
import { Avatar, TextField } from "@material-ui/core";
import SortSharpIcon from "@material-ui/icons/SortSharp";

function VideoPage({
  channelTitle,
  description,
  title,
  tags,
  videoId,
  channelId,
}) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getSuggestedVideos = () => { // Suggestion Videos API
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
    }

    const getComments = () => { // Comments API
      axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&textFormat=plainText&videoId=${videoId}&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk`
      )
      .then((res) => {
        // console.log(res)
        setComments(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    getSuggestedVideos()
    if(videoId){
      getComments()
    }
  }, [videoId]);

  return (
    <div className="video-page">
      <div className="video-section">
        <iframe
          id="player"
          type="text/html"
          width="950"
          height="530"
          src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
          frameBorder="0"
          title="myFrame"
        ></iframe>
        <TitleSection title={title} tags={tags} />
        <hr></hr>
        <ChannelSection channelTitle={channelTitle} channelId={channelId} />
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
          <Avatar src="" />
          <TextField
            className="textfield"
            id="standard-basic"
            label="Add a public comment"
            variant="standard"
          />
        </div>
        <div className="comment-section">
          {comments.map((comment) => (
            <CommentsSection
              profileImage={
                comment.snippet.topLevelComment.snippet.authorProfileImageUrl
              }
              authorName={
                comment.snippet.topLevelComment.snippet.authorDisplayName
              }
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
