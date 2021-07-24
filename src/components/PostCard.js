import React from 'react';
import history from './../history'
import{
    useParams
  } from "react-router-dom";
const PostCard = ()=>{
    let { id } = useParams();
    console.log({id})
    
    return (
        <div>
            
            <h1>Card</h1>
        </div> 
    )
}

export default PostCard;