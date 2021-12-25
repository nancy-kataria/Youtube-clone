import React from "react";
import { Avatar } from "@material-ui/core";

function CommentsSection({ profileImage, authorName, text, likes }) {
  return (
    <div className="commentCard">
      <Avatar className="profile-image" src={profileImage} />
      <div className="text">
        <h5>{authorName}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CommentsSection;
