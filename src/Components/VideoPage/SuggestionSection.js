import React from 'react'

function SuggestionSection({videoImage, title, channelTitle}) {
    return (
        <div className='suggestion-videos'>
            <img className='Svideo-image' src={videoImage} alt={channelTitle}></img>
            <div>
                <h5>{title.slice(0,32)} ...</h5>
                <p>{channelTitle}</p>
                <p>64K views • 2 months ago</p>
            </div>
        </div>
    )
}

export default SuggestionSection
