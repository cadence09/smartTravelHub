import React, { useEffect,useState } from 'react';
import history from './../history';
import axios from 'axios';
import{
    useParams
  } from "react-router-dom";
import '../App.css'
import PhotoGallery from "./PhotoGallery"

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
            <h1 className="home_title" onClick={()=>history.push("/")}>Smart Travel Hub</h1>
            {travelPosts.map(travelPost=>{
               return( <div className="margin">
                    <h1>{travelPost.title}</h1>
                    <p>{travelPost.state},{travelPost.country}</p>
                    {travelPost.days.map((day,i)=>{
                        
                        return (<PhotoGallery day={day}/>
                        
                            
                            )
                    })}
                </div>
            )})}
        </div> 
    )
}

export default PostCard;