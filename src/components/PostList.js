import React from 'react';
import axios from 'axios';

import history from './../history';
const PostList = ({searchResult,posts,refresh})=>{

    const like_post=(e,post_id)=>{
        e.preventDefault();

     console.log("new",posts[0].id,post_id)
     for(let i=0; i<posts.length; i++){
         if(post_id == posts[i].id){
             console.log("yes")
             posts[i].likes+=1
             axios.patch(`http://localhost:5000/travelposts/${post_id}`,{
                likes_count:posts[i].likes
            })
            .then(()=>{
                refresh()
            })
         }
     }
    //  setIsSearch(false)
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
                        <p onClick={(e)=>like_post(e,post.id)}>💗{post.likes}</p>
                      <p onClick={()=>history.push(`/postCard/${post.id}`)}>{post.title}</p>
                      {post.state}-{post.country}
                </div>
            )
        }))
    }


    console.log("!!search", !!searchResult, searchResult)
    return (
        <div>
            <h1>post</h1>
           
            {searchResult? (<div><h1>Search Result for {searchResult} </h1>{post_list()}</div>):post_list()}
            {/* {posts.map(post=>{
                return (
                    <div>

                           {post.days.map((days,i)=>{
                          
                            if(i===0){
                                return (
                                <div>
                                    <img onClick={()=>history.push(`/postCard/${post.id}`)} height="200" width="300" src={days.photosList[0].photo} alt="post cover picture"/>
                                </div>)
                        }})}
                            <p onClick={(e)=>like_post(e,post.id)}>💗{post.likes}</p>
                          <p onClick={()=>history.push(`/postCard/${post.id}`)}>{post.title}</p>
                          {post.state}-{post.country}
                    </div>
                )
            })} */}
        </div> 
    )
}

export default PostList;