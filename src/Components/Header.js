import React, { useEffect, useState } from "react";
import "./CSS/Header.css";
import MenuIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCallOutlined";
import AppsIcon from "@material-ui/icons/AppsOutlined";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import AvatarIcon from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import axios from "axios";

function Header({ isCollapsed, setIsCollapsed }) {
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=500&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk"
      )
      .then((res) => {
        setPosts(res.data.items);
        setFilteredData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const menuHandler = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  };

  const inputSearchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    const search = filteredData.filter((data) =>
      `${data.snippet.channelTitle}`.split("")[0].toLowerCase().includes(value)
    );

    // if (value !== "") {
    //   setPosts(search);
    // }
    setPosts(search);
    setInputSearch(value);
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="Youtube-logo"
          />
        </Link>
      </div>
      <div className="header-input">
        <div className="search-box">
          <input
            onInput={inputSearchHandler}
            placeholder="Search"
            type="text"
          />
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header-input-button" />
          </Link>
        </div>
        {!inputSearch ? (
          ""
        ) : (
          <ul className="search-list">
            {posts.slice(0, 10).map((filter) => (
              <Link to={`/search/${filter.snippet.channelTitle}`} key={Math.random()}>
                <li>{filter.snippet.channelTitle}</li>
              </Link>
            ))}
          </ul>
        )}
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
