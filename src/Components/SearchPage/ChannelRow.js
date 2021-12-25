import React from 'react'
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core'
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow-logo' alt={channel} src={image} />
            <div className='channelRow-text'>
                <h3>{channel}  {verified && <MusicNoteSharpIcon fontSize='small' />}</h3>
                <p>{subs} subsribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
            <Button className='subscribeButton' variant='contained'>Subscribe</Button>
        </div>
    )
}

export default ChannelRow
