import React from 'react';

import history from './../history';
const PostList = ({posts})=>{
   
    return (
        <div>
            <h1>post</h1>

            
            {posts.map(post=>{
                return (
                    <div>

                           {post.days.map((days,i)=>{
                          
                            if(i===0){
                                return (<img onClick={()=>history.push(`/postCard/${post.id}`)} height="200" width="300" src={days.photosList[0].photo} alt="post cover picture"/>)
                        }})}
                          <p onClick={()=>history.push(`/postCard/${post.id}`)}>{post.title}</p>
                          {post.state}-{post.country}
                    </div>
                )
            })}
        </div> 
    )
}

export default PostList;