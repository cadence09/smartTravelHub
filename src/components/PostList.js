import React from 'react';

import history from './../history';
const PostList = ({posts})=>{
    console.log("ggg",posts[0]); 
    return (
        <div>
            <h1>post</h1>

            
            {/* {posts.map(post=>{
                return (
                    <div>
                        <img onClick={()=>history.push('/postCard')} height="200" width="300" src={post.photosList.photos} alt="post cover picture"/>
                        <p onClick={()=>history.push('/postCard')}>{post.title}</p>
                        {post.country}-{post.state}
                        {" "}{post.likes}
                    </div>
                )
            })} */}
        </div> 
    )
}

export default PostList;