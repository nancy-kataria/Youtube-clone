import React from "react";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";

function ChannelSection({ channelTitle }) {
  return (
    <div className="channel-title">
      <div className="channel-section">
        <Avatar className="video-Avatar" src="" />
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
