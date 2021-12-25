import React,{useState, useEffect} from 'react'
import axios from 'axios'

function FetchTest() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=the%20weekend&key=AIzaSyCt9Ppy3QEsZcJlyFvzUp-p4-13bmNIvXk')
        .then(res=>{
            console.log(res)
            setPosts(res.data.items)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (        
        <div>
            <ul>{
                    posts.map(post => (<li key={Math.random()}>{post.snippet.title}</li>))
                    // posts.items.forEach(item => {
                    //     <li>{item.snippet.title}</li>
                    // })
                }
            </ul>
        </div>
    )
}

export default FetchTest
