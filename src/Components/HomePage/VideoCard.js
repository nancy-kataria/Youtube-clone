import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'

function VideoCard({isCollapsed, image, title, channel, views, timestamp, channelId}) {
    const [channelPosts, setChannelPosts] = useState([])
    let channelImage =''

    useEffect(() => {
      const getChannelData = () => { // Channel API
          axios
          .get(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk`
          )
          .then((res) => {
            // console.log(res);
            setChannelPosts(res.data.items);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if(channelId){
        getChannelData()
      }
    },[channelId]) 
    
    channelPosts.forEach(channelPost => { // to access the data of a particular channel to render on the video card
        if(channelPost.snippet.thumbnails.high.url){
            channelImage = channelPost.snippet.thumbnails.high.url
        }
    })

    return (
        <div className={(!isCollapsed)? 'videoCard': 'video-Card'}>
            <img className={(!isCollapsed)? 'videoCard-thumbnail': 'video-Card-thumbnail'} src={image} alt={title} />
            <div className='video-info'>
                <Avatar 
                className='video-avatar'
                alt={channel}
                src={channelImage}
                />
                <div className='video-text'>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} views • {timestamp} ago</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard