import React from 'react'
import { CiSearch } from "react-icons/ci";

function Recommendation({filterdNote,query}) {
  return (
    <div className='search-merge'>
    <ul className='recomend-list'>
      {filterdNote.map((item)=>{return <div><li className='recommend-list' key={item.id} ><CiSearch className='recommend-search-icon' />{item.Text}</li></div>})}
     

    
    
    
    </ul>
    </div>
  )
}

export default Recommendation