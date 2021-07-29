import React,{useEffect, useState} from 'react';
import axios from "axios";
import "../App.css";
import history from '../history';
import worldTravel from "../images/worldTravel.jpeg"
const PostForm =()=>{
  
    const generateDefaultData=()=>{
        const data={
            "title":"",
            "country":"",
            "state":"",
            "day":[],
        }
        return data
    }
    
    const [dataInputs, setDataInputs]=useState(generateDefaultData)
    const [dayforms,setDayForms] =useState([{"day_Id":null,"destination":"","content":"","photosList":[]}])
    const [photos,setPhotos]=useState([])
    const textInput=(e)=>{
       const name=e.target.className
       const value=e.target.value
       setDataInputs((current=>({...current,[name]:value})))
      
    }
    
   


    const dayInput =(i,e)=>{
   
      const values=[...dayforms]
      const name=e.target.className
      const value=e.target.value

        values[i].day_Id=i;
        values[i][name]=value;
        values[i].photosList=[]
        
    }

    const addDayForm =(e)=>{
        e.preventDefault();
 
        const values=[...dayforms];
        values.push({"day_Id":null,"destination":"","content":"","photosList":[]})
        setDayForms(values)
   
      
    }
    
    const onformSubmitted=(e)=>{
        e.preventDefault()
     
        const values=[...dayforms]
 
       
       values.map((day)=>{
            photos.map(photo=>{
                 if(day.day_Id == photo.day_id){
                     day.photosList.push(photo)
                 }
            })
        })
       
    
        dataInputs.day=values;
    
      axios.post('http://localhost:5000/travelposts',{
          title:dataInputs.title,
          country:dataInputs.country,
          state:dataInputs.state,
          days:dataInputs.day,
          likes:0
      })
      .then((res)=>{
          console.log("data received")
      })
      .catch(err=>{
          console.log("err",err)
      })

      setDataInputs(generateDefaultData())
    }
    
    const loadFile =(day_id,file)=>{
        let imageReader=new FileReader();
        imageReader.onload=(e)=>{
              
                    setPhotos(photos=>[...photos,{day_id: day_id,photo:imageReader.result}])
                   
             }
            
             imageReader.readAsDataURL(file)

       
            
    }
const uploadPhoto=(day_id,e)=>{
            e.preventDefault()
            let files = e.target.files;
        
   for (let i=0; i<files.length; i++){
       let file=files[i]
      loadFile(day_id,file)
   }
    }




    return (
        <div className="post_form_body">
        <h1 className="home_title" onClick={()=>history.push("/")} >Smart Travel Hub</h1>
           
        <div className="post_form">
        <h2>Post Your Travel experience</h2>
        <form onSubmit={onformSubmitted} >
            <div className="input_field">
               <label htmlFor="title">Title <br/>
               <input type="text" id="title" placeholder="Title" className="title" onChange={textInput} value={dataInputs.title}></input>
               </label><br/>
               <div className="travelLocation">
               <label htmlFor="country">Country:<br/>
               <input type="text" id="country" placeholder="Country" className="country" onChange={textInput} value={dataInputs.country}></input>
               </label>
               <label htmlFor="country">State:<br/>
               <input type="text" placeholder="State" className="state" onChange={textInput} value={dataInputs.state}></input>
                </label>
                </div>
                </div>
         { dayforms.map((form,i)=>{
             return (
                <section className="input_field"> <br/>
                    Day {i+1} Trip<br/>
                    <label htmlFor="destination">Destination<br/>
               <input type="text" id="destination" placeholder="destination" className="destination" onChange={(e)=>dayInput(i,e)} values={dayInput[i]} ></input>
               </label><br/>
               <label htmlFor="destination">Share Your Travels<br/>
               <textarea type="text" id="experience" placeholder="share your experience with this destination" rows="5" cols="40" className="content" onChange={(e)=>dayInput(i,e)} values={dayInput[i]}/>
               </label><br/>
               <input type="file" onChange={(e)=>uploadPhoto(form.day_Id,e)} multiple/> 
              {photos.filter((photo)=>photo.day_id ==form.day_Id).map(data=>{
               
                   return (
                      
                     <img height="50" width="50" src={data.photo}/>
                  ) 
                })}
               
                </section>
             )
         })}
          <p onClick={addDayForm}>+ add day</p> 
           <button type="submit"> Submit</button>
        </form>
        </div>
        </div>
    )
}
export default PostForm;