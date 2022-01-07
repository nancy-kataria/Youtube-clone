import React, { useState, useEffect } from "react";
import "./CSS/Test.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import axios from "axios";

function FetchTest() {
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk"
      )
      .then((res) => {
        // console.log(res);
        setPosts(res.data.items);
        setFilteredData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const inputSearchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    const search = filteredData.filter((data) =>
      `${data.snippet.channelTitle}`.toLowerCase().includes(value)
    );

    // if (value !== "") {
    //   setPosts(search);
    // }
    setPosts(search);
    setInputSearch(value);
  };

  return (
    <div className="search-box">
      {/* <ul>{
                    posts.map(post => (<li key={Math.random()}>{post.snippet.title}</li>))
                    // posts.items.forEach(item => {
                    //     <li>{item.snippet.title}</li>
                    // })
                }
            </ul> */}
      <input onInput={inputSearchHandler} placeholder="Search" type="text" />
      <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header-input-button" />
      </Link>
      {(!inputSearch) ? ""
       : (
        <div className="search-list">
          <ul>
            {posts.slice(0,10).map((filter) => (
              <Link to={`/search/${filter.snippet.channelTitle}`} key={Math.random()}>
                <li className="filters">{filter.snippet.channelTitle}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      <div className="random">
      <ul>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
          <li>Random Stuff</li>
      </ul>
      </div>
    </div>
  );
}

export default FetchTest;
