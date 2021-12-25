import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";

import Header from "./Header";
import SideBar from "./SideBar/SideBar";
import SidebarMin from "./SideBar/SidebarMin";
import RecommendedVideos from "./HomePage/RecommendedVideos";
import SearchPage from "./SearchPage/SearchPage";
import VideoPage from "./VideoPage/VideoPage";
import HideSideBar from "./SideBar/HideSideBar";

function HomePage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [posts, setPosts] = useState([]);
  let title, channelTitle, videoImage, description = ''
  let tags = [];

  let location = useLocation();
  // console.log(location.pathname)

  const sideBarCollapse = () => {
    if (location.pathname.includes("/video")) {
      return true;
    } else {
      return false;
    }
  };

  const pathName = location.pathname

  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk"
      )
      .then((res) => {
        // console.log(res);
        setPosts(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  posts.forEach((post) => {
    if (location.pathname.includes(post.id)) {
      // console.log(post)
      title = post.snippet.title;
      channelTitle = post.snippet.channelTitle;
      if(post.snippet.thumbnails.maxres){
        videoImage=post.snippet.thumbnails.maxres.url
      }
      else{
        videoImage = post.snippet.thumbnails.high.url;
      }
      description = post.snippet.description;
      if(post.snippet.tags){
        tags=post.snippet.tags.slice(0,3)
      }
    }
  });


  return (
    <div className="App">
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="app-page">
        {sideBarCollapse() ? (
          !isCollapsed ? (
            <HideSideBar />
          ) : (
            <SideBar />
          )
        ) : !isCollapsed ? (
          <SideBar />
        ) : (
          <SidebarMin />
        )}
        <Routes>
          <Route path="/" element={<Home isCollapsed={isCollapsed} />} />
          <Route
            path="/search/:searchTerm"
            element={<SearchPage isCollapsed={isCollapsed} pathName={pathName} />}
          />
          <Route
            path="/video/:videoTerm"
            element={
              <VideoPage
                videoImage={videoImage}
                channelTitle={channelTitle}
                description={description}
                title={title}
                tags={tags}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

const Home = ({ isCollapsed }) => {
  return <RecommendedVideos isCollapsed={isCollapsed} />;
};

export default HomePage;
