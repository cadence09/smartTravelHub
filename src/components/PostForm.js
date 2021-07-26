import React,{useEffect, useState} from 'react';
import axios from "axios";

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
      console.log("dd",dataInputs)
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
        <div>
        <h1>Post form</h1>
        <form onSubmit={onformSubmitted}>
           
               <input type="text" placeholder="Title" className="title" onChange={textInput} value={dataInputs.title}></input>
  
               <input type="text" placeholder="Country" className="country" onChange={textInput} value={dataInputs.country}></input>
           
               <input type="text" placeholder="State" className="state" onChange={textInput} value={dataInputs.state}></input>
    
         { dayforms.map((form,i)=>{
             return (
                <section>
                    Day {i+1} Trip
               <input type="text" placeholder="destination" className="destination" onChange={(e)=>dayInput(i,e)} values={dayInput[i]} ></input>
               <input type="text" placeholder="share your experience with this destination" className="content" onChange={(e)=>dayInput(i,e)} values={dayInput[i]}/>
               <input type="file" onChange={(e)=>uploadPhoto(form.day_Id,e)} multiple/> 
              {photos.filter((photo)=>photo.day_id ==form.day_Id).map(data=>{
               
                   return (
                      
                     <img height="300" width="200" src={data.photo}/>
                  ) 
                })}
               
                </section>
             )
         })}
          <p onClick={addDayForm}>+ add day</p> 
           <button type="submit"> Submit</button>
        </form>
        </div>
    )
}
export default PostForm;