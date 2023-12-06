// import React, { useState } from 'react'

import Recommendation from "./Recommendation"
import { CiSearch } from "react-icons/ci";


function Search({onSearch,query,setQuery,filterdNote,isSearching}) {

  

  // function handleInputChange(e){
  //   setQuery(e.target.value)
  //   onSearch(e.target.value)
  //   console.log('query from search',query );
  // }


  return (
    <div>
      <div className="search-container"><span><CiSearch  className="search-Icon"/></span><input className='search'
      type="text"
      placeholder="Search notes..."
      value={query}
      onChange={e => onSearch(e)}
    /></div>
    {isSearching &&  <Recommendation filterdNote={filterdNote} query={query}/>}
   
    </div>
  )
}

export default Search