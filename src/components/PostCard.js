import React, { useEffect,useState } from 'react';
import history from './../history'
import axios from 'axios';

import{
    useParams
  } from "react-router-dom";
const PostCard = ()=>{
    let { id } = useParams();
    console.log({id})
    const [travelPosts,setTravelPosts] =useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/travelposts/${id}`)
        .then(res=>{
           
            setTravelPosts(res.data)
        })
        .catch(err=>{
            console.log("err",err)
        })
    },[])
    return (
        <div>
       
            {travelPosts.map(travelPost=>{
               return( <div>
                    <h1>{travelPost.title}</h1>
                    <p>{travelPost.state},{travelPost.country}</p>
                    {travelPost.days.map((day,i)=>{
                        return (<div>
                             
                              <h3>Day {i+1}</h3>
                              <p>{day.content}</p>
                              <p>{day.destination}</p>
                              {day.photosList.map(photo=>{
                                  return(
                                      <img src={photo.photo}/>
                                  )
                              })} 
                            </div>)
                    })}
                </div>
            )})}
        </div> 
    )
}

export default PostCard;