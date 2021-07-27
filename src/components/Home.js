import React,{useState,useEffect} from 'react';
import PostList from './PostList';
import history from './../history';
import SearchBar from "./SearchBar";
import axios from "axios";

const Home = ()=>{
     
     const [posts, setPosts] = useState([])
    //  const [isSearch, setIsSearch] = useState(false)
     const [searchResult, setSearchResult] = useState(null)
    useEffect(()=>{
        getPosts();
        // axios.get('http://localhost:5000/travelposts')
        // .then((res)=>{
            
        //     setPosts(res.data)
        // })
        // .catch(err=>{
        //     console.log("err",err)
        // })
    },[])
 
    const getPosts=()=>{
        axios.get('http://localhost:5000/travelposts')
        .then((res)=>{
            
            setPosts(res.data)
        })
        .catch(err=>{
            console.log("err",err)
        })
    }
    const searchPosts=(val)=>{
        // const filtered = posts.filter((post,i) => {
        //     // return country.name.toLowerCase().includes(input.toLowerCase())
        //     console.log("dd",post[i])
        //     if (post[i].country.toLowerCase())
        //    })
        
        console.log("search",val)
        if(val){
        axios.get(`http://localhost:5000/travelposts/search/${val}`)
        .then(res=>{
            console.log("search res",res)
            
            setPosts(res.data)
            // setIsSearch(!isSearch)
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
          
            <h1>Home</h1>
            <SearchBar  searchPosts={searchPosts}  />
            <p onClick={()=>history.push("/postForm")}>+</p >
            {/* {console.log("result",posts)} */}
            {/* {posts.result == "No Result"? <h1>No Result</h1> :  */}
            {posts.result == "No Result"? <h1>No Result</h1> :  <PostList refresh={refresh} searchResult={searchResult} posts={posts}/>}
        </div>
    )
}

export default Home;