import React from 'react'
import Avatar from '@material-ui/core/Avatar'
// import {useLocation} from 'react-router-dom'

function VideoCard({isCollapsed, image, title, channel, views, timestamp, channelImage}) {
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