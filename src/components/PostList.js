import React from 'react';
import axios from 'axios';

import history from './../history';
const PostList = ({searchResult,posts,refresh})=>{

    const like_post=(e,post_id)=>{
        e.preventDefault();

     
     for(let i=0; i<posts.length; i++){
         if(post_id == posts[i].id){
           
             posts[i].likes+=1
             axios.patch(`https://smart-travel-hub-backend.herokuapp.com/travelposts/${post_id}`,{
                likes_count:posts[i].likes
            })
            .then(()=>{
                refresh()
            })
         }
     }

    }
    
    const post_list=()=>{
        return (posts.map(post=>{
            return (
                <div>

                       {post.days.map((days,i)=>{
                      
                        if(i===0){
                            return (
                            <div>
                                <img onClick={()=>history.push(`/postCard/${post.id}`)} height="200" width="300" src={days.photosList[0].photo} alt="post cover picture"/>
                            </div>)
                    }})}
                        <p onClick={(e)=>like_post(e,post.id)}>💗 {post.likes} Likes</p>
                      <p onClick={()=>history.push(`/postCard/${post.id}`)}>{post.title}</p>
                      {post.state}-{post.country}
                </div>
            )
        }))
    }


   
    return (
        <div>
            {searchResult? 
             (
             <div >
                 <h1 className="result">Search Results for {searchResult}</h1>
                 <div className="posts_list"> 
                 {post_list()}
                 </div>
                 </div>
             ):
             <div className="posts_list"> 
             <p className="add_post" onClick={()=>history.push("/postForm")}>+<br/>
                <span>Add Post</span>
             </p>
             {post_list()}
             </div>}
        </div> 
    )
}

export default PostList;