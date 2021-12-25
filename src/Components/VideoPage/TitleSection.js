import React from "react";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import MoreHorizSharpIcon  from "@material-ui/icons/MoreHorizSharp";


function TitleSection({title, tags}) {
  return (
    <div className="title">
      <div className="tags">
        {tags.map((tag) => (
          <p key={Math.random()}>#{tag}</p>
        ))}
      </div>
      <h4>{title}</h4>
      <div className="title-section">
      <p>67,048 views • 18-Jan-2020</p>
      <div className="video-icons">
      <ThumbUpAltOutlinedIcon className="video-icon" />
      <h5>LIKE</h5>
      <ThumbDownAltOutlinedIcon className="video-icon" />
      <h5>DISLIKE</h5>
      <ReplyOutlinedIcon className="video-icon" />
      <h5>SHARE</h5>
      <PlaylistAddOutlinedIcon className="video-icon" />
      <h5>SAVE</h5>
      <MoreHorizSharpIcon className="video-icon" />
      </div>
      </div>
    </div>
  );
}

export default TitleSection;
