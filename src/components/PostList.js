import React from 'react';

import history from './../history';
const PostList = ({posts})=>{
    if (posts.length>0){
        console.log("ggg",posts)}
        ; 
    return (
        <div>
            <h1>post</h1>

            
            {posts.map(post=>{
                return (
                    <div>
                      
                        {post.days.map((days)=>{
                            console.log("days",days.photosList)
                            return days.photosList.map(photos=>{
                                
                               return( <div>
                                {console.log("photo",photos.photo)}
                                {/* <img src={photos.photo}/> */}
                                <img onClick={()=>history.push('/postCard')} height="200" width="300" src={photos.photo} alt="post cover picture"/>
                                </div>
                               )
                              
                            })

                        })}
                          <p onClick={()=>history.push(`/postCard/${post.id}`)}>{post.title}</p>
                          {post.state}-{post.country}
                        {/* <img onClick={()=>history.push('/postCard')} height="200" width="300" src={post.photosList.photos} alt="post cover picture"/>
                        <p onClick={()=>history.push('/postCard')}>{post.title}</p>
                        {post.country}-{post.state}
                        {" "}{post.likes} */}
                    </div>
                )
            })}
        </div> 
    )
}

export default PostList;