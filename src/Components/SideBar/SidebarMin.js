import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import ExploreIcon from '@material-ui/icons/ExploreOutlined'
import SubscriptionIcon from '@material-ui/icons/SubscriptionsOutlined'
import VideoLibraryIcon from '@material-ui/icons/VideoLibraryOutlined'
import SidebarMinRow from './SidebarMinRow'

function SidebarMin() {
    return (
        <div className='Sidebar-min'>
            <SidebarMinRow Icon={HomeIcon} title='Home' />
            <SidebarMinRow Icon={ExploreIcon} title='Explore' />
            <SidebarMinRow Icon={SubscriptionIcon} title='Subscription' />
            <SidebarMinRow Icon={VideoLibraryIcon} title='Library' />
        </div>
    )
}

export default SidebarMin
