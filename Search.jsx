// import React, { useState } from 'react'

function Search({onSearch,query,setQuery}) {

  

  // function handleInputChange(e){
  //   setQuery(e.target.value)
  //   onSearch(e.target.value)
  //   console.log('query from search',query );
  // }


  return (
    <div>
    <input className='search'
      type="text"
      placeholder="Search notes..."
      value={query}
      onChange={e => onSearch(e)}
    />
    </div>
  )
}

export default Search