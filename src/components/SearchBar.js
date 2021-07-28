import React,{useState}from 'react';

const SearchBar = ({searchPosts}) => {
   
   const [searchVal, setSearchVal]=useState("")
   
   const search=(e)=>{
       const newSearch=searchVal
       e.preventDefault()
       console.log("newSeach",newSearch)
       searchPosts(newSearch)
       setSearchVal("")
   }
 
   return( <form className="search_form">
        <input
            type="text"
            placeholder="Search travel posts"
            name="posts"
            value={searchVal}
            onInput={(e)=>setSearchVal(e.target.value)}
          
        />
        <button className="search_button" type="submit" onClick={search}>Search</button>
      
    </form>
    )
}
export default SearchBar;