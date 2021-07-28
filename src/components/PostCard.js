import React, { useEffect,useState } from 'react';
import history from './../history'
import axios from 'axios';
import{
    useParams
  } from "react-router-dom";
import '../App.css'

const PostCard = ()=>{
    let { id } = useParams();
    console.log({id})
    const [travelPosts,setTravelPosts] =useState([])
    const [currentImg, setCurrentImg] =useState("")
    useEffect(()=>{
        axios.get(`http://localhost:5000/travelposts/${id}`)
        .then(res=>{
            console.log("res",res.data)
            setTravelPosts(res.data)
            // console.log("photo",res.data[0].days[0].photosList[0].photo)
            setCurrentImg(res.data[0].days[0].photosList[0].photo)
        })
        .catch(err=>{
            console.log("err",err)
        })
    },[])

    const changeImg=(e,day,photo)=>{
        console.log("day",day,"photo",photo)
       
            setCurrentImg(e.target.src)


    }
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

                        
                              <div className="carousel-container">
                              {i>0?  (<img src={day.photosList[0].photo}/>):(<img src={currentImg}/>)}
                             
                               <ul className="next-list">
                               {day.photosList.map((photo)=>{
                              
                                    return(
                                        <div>
                                        <img src={photo.photo} onClick={(e)=>changeImg(e,day,photo)} />
                                    
                                        </div>
                                
                                    )
                          
                              })} 
                               </ul> 
                          
                              </div>

                           
                            </div>)
                    })}
                </div>
            )})}
        </div> 
    )
}

export default PostCard;