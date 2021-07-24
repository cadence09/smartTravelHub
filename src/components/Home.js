import React,{useState,useEffect} from 'react';
import PostList from './PostList';
import history from './../history';
import SearchBar from "./SearchBar";
import axios from "axios";

const Home = ()=>{
     
     const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/travelposts')
        .then((res)=>{
            // console.log("res",res)
       
            // console.log("data",res.data[1].days[0].photosList[0].photo)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log("err",err)
        })
    })
    return (
        <div>
            <h1>Home</h1>
            {/* <SearchBar posts={posts}/> */}
            <p onClick={()=>history.push("/postForm")}>+</p >
            <PostList posts={posts}/>
        </div>
    )
}

export default Home;