// import React, { useState } from 'react'

import Recommendation from "./Recommendation";
import { CiSearch } from "react-icons/ci";

function Search({
  onSearch,
  query,
  setQuery,
  filterdNote,
  isSearching,
  setFilteredNote,
  notes,
  setNotes,
  setIsSearching,
  setSelectedNote,
  selectedNote,
  handleLink,
}) {
  // function handleInputChange(e){
  //   setQuery(e.target.value)
  //   onSearch(e.target.value)
  //   console.log('query from search',query );
  // }

  return (
    <div className="recommendationContainer">
      <div className="search-container">
        <span>
          <CiSearch className="search-Icon" />
        </span>
        <input
          className="search"
          type="text"
          placeholder="Search notes..."
          value={query}
          onChange={(e) => onSearch(e)}
        />
      </div>
      {isSearching && (
        <Recommendation
          filterdNote={filterdNote}
          query={query}
          setFilteredNote={setFilteredNote}
          notes={notes}
          setNotes={setNotes}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          selectedNote={selectedNote}
          setSelectedNote={selectedNote}
          handleLink={handleLink}
        />
      )}
    </div>
  );
}

export default Search;
