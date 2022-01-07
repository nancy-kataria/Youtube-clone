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
import PlaylistPage from "./PlaylistPage/PlaylistPage";
import FetchTest from "./FetchTest";

function HomePage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  let title,
    channelTitle,
    videoImage,
    description = "";
  let videoId = "";
  let channelId="";
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

  const pathName = location.pathname;
  let searchTerm = pathName.trim();

  useEffect(() => {
    const getVideos = () => { // Home page Recommended Videos API to pass on data as props to Video Page
      axios
        .get(
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk"
        )
        .then((res) => {
          // console.log(res);
          setPosts(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getSearchVideos = () => { // Search Page Videos API to pass on data as props to Video Page
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchTerm}&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk`
        )
        .then((res) => {
          // console.log(res);
          setSearchPosts(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if(pathName.includes('/video')){
      getVideos();
    }
    if(pathName.includes('/search')){
      getSearchVideos();
    }
  }, [searchTerm, pathName]);

  posts.forEach((post) => { // To access the content of each element from the 'item' array for the home page videos to render it on Video Page
    if (location.pathname.includes(post.id)) { // This api doesnt have videoId
      // console.log(post)
      title = post.snippet.title;
      channelTitle = post.snippet.channelTitle;
      if (post.snippet.thumbnails.maxres) {
        videoImage = post.snippet.thumbnails.maxres.url;
      } else {
        videoImage = post.snippet.thumbnails.high.url;
      }
      description = post.snippet.description;
      if (post.snippet.tags) {
        tags = post.snippet.tags.slice(0, 3); //To select a few or shorten the elements of the 'tag' array
      }
      videoId = post.id;
      channelId = post.snippet.channelId;
    }
  });

  searchPosts.forEach((searchPost) => { // To access the content of each element from the 'item' array for the search page videos to render it on Video Page
    if (location.pathname.includes(searchPost.id.videoId)) {
      // console.log(searchPost)
      title = searchPost.snippet.title;
      channelTitle = searchPost.snippet.channelTitle;
      if (searchPost.snippet.thumbnails.maxres) {
        videoImage = searchPost.snippet.thumbnails.maxres.url;
      } else {
        videoImage = searchPost.snippet.thumbnails.high.url;
      }
      description = searchPost.snippet.description;
      if (searchPost.snippet.tags) {
        tags = searchPost.snippet.tags.slice(0, 3); //To select a few or shorten the elements of the 'tag' array
      }
      videoId = searchPost.id.videoId;
      channelId = searchPost.snippet.channelId;
    }
  });

  return (
    <div className="App">
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="app-page">
        {sideBarCollapse() ? (
          !isCollapsed ? (
            <HideSideBar /> //To hide the side bar when the video page is rendered
          ) : (
            <SideBar />
          )
        ) : !isCollapsed ? ( //to toggle between minimum and maximum size of sidebar
          <SideBar />
        ) : (
          <SidebarMin />
        )}
        <Routes>
          <Route path="/youtube-clone" element={<Home isCollapsed={isCollapsed} />} />
          <Route
            path="/search/:searchTerm"
            element={
              <SearchPage isCollapsed={isCollapsed} pathName={pathName} />
            }
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
                videoId={videoId}
                channelId={channelId}
              />
            }
          />
          <Route path='/playlist' element={<PlaylistPage />} />
          <Route path='/fetch' element={<FetchTest />} />
        </Routes>
      </div>
    </div>
  );
}

const Home = ({ isCollapsed }) => {
  return <RecommendedVideos isCollapsed={isCollapsed} />;
};

export default HomePage;
