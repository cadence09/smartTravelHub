import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import "../App.css"

const PhotoGallery= ({day})=>{
    const [currentImg, setCurrentImg] =useState(day.photosList[0].photo)

 const changeImg=(e)=>{

   
        setCurrentImg(e.target.src)


}
    return (
                                
                            <div className="margin">
                          
                               <h3><FontAwesomeIcon icon={faGlobe} /> Day {day.day_Id+1}</h3>
                               <div className="progress">
                                <div className="days">
                               <p>{day.destination}</p>
                               <p>{day.content}</p>
                               <div className="carousel-container">
                             <img src={currentImg}/>
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
                    
                             </div>
                                  </div>
                           
                            </div>
    )
}

export default PhotoGallery;