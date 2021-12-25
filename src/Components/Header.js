import React, { useState } from "react";
import "./CSS/Header.css";
import MenuIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCallOutlined";
import AppsIcon from "@material-ui/icons/AppsOutlined";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import AvatarIcon from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header({ isCollapsed, setIsCollapsed }) {
  const [inputSearch, setInputSearch] = useState("");

  const menuHandler = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  };

  const inputSearchHandler = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div className="header">
      <div className="header-left">
        <button onClick={menuHandler}>
          <MenuIcon className="header-icons" />
        </button>
        <Link to="/">
          <img
            className="header-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png"
            alt="Youtube-logo"
          />
        </Link>
        <h2>YouTube</h2>
      </div>
      <div className="header-input">
        <input
          onChange={inputSearchHandler}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
      <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header-input-button" />
      </Link>  
      </div>
      <div className="header-icons">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationIcon className="header-icon" />
        <AvatarIcon className="header-icon" />
      </div>
    </div>
  );
}

export default Header;
