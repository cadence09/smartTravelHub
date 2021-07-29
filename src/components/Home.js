import React,{useState,useEffect} from 'react';
import PostList from './PostList';
import history from './../history';
import SearchBar from "./SearchBar";
import axios from "axios";
import airplane from "../images/airplane.png"

const Home = ()=>{
     
     const [posts, setPosts] = useState([])
     const [searchResult, setSearchResult] = useState(null)
    useEffect(()=>{
        getPosts();
       
    },[])
 
    const getPosts=()=>{
        axios.get('https://smart-travel-hub-backend.herokuapp.com/travelposts')
        .then((res)=>{
            
            setPosts(res.data)
        })
        .catch(err=>{
            console.log("err",err)
        })
    }
    const searchPosts=(val)=>{
        if(val){
        axios.get(`https://smart-travel-hub-backend.herokuapp.com/travelposts/search/${val}`)
        .then(res=>{
            
            
            setPosts(res.data)
     
            setSearchResult(val)
        })
        .catch(err=>{
            console.log("err",err)
        })
        }else{
            setSearchResult(val)
            getPosts()
        }
        

      }

      const refresh =()=>{
          searchPosts(searchResult)
      }

    return (
        <div>
          
            <h1 className="home_title">Smart Travel Hub</h1>
            <SearchBar  searchPosts={searchPosts}  />
          
            {posts.result == "No Result"? <div className="noResult"><h1>No Result</h1><p className="add_post" onClick={()=>history.push("/postForm")}>+<br/><span>Add Post</span></p></div> :  <PostList refresh={refresh} searchResult={searchResult} posts={posts}/>}
            <img className="airplane" src={airplane}/>
        </div>
    )
}

export default Home;