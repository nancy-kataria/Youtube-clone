import React from 'react'

function SidebarMinRow({Icon, title}) {
    return (
        <div className='sidebarMinRow'>
            <Icon />
            <p>{title}</p>
        </div>
    )
}

export default SidebarMinRow
