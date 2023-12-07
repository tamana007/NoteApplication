import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Recommendation({ filterdNote, query ,setFilteredNote,notes,setNotes,isSearching,setIsSearching,selectedNote,setSelectedNote,handleLink}) {
  // const [linkClick,setLinkClick]=useState(false);
  // const[selectedNote,setSelectedNote]=useState([])
  // const [saveSelected,setSaveSelected]=useState()



  return (
    <div className="search-merge">
      <ul className="recomend-list">
        {filterdNote.map((item) => {
          return (
            <div>
              <li onClick={(text)=>handleLink(item.Text)} 
              value={selectedNote}
              onChange={(e)=>setSelectedNote(e.target.value)}
              className="recommend-list" key={item.id}>
                <CiSearch className="recommend-search-icon" />
                {item.Text}
                
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Recommendation;
