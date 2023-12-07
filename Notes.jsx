import React, { useState, useEffect } from "react";
import Note from "./Note";
import "./Notes.scss";
import { GrNotes } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
import SavedNotes from "./SavedNotes";
import Search from "./Search";
// import { MdDeleteSweep } from "react-icons/md";
// import {<FontAwesomeIcon icon="fa-solid fa-notes" />} from 'react-icon/fa'

function Notes() {
  const [isClick, setIsclick] = useState(false);
  const [isNote, setIsNote] = useState(false);
  const [notes, setNotes] = useState();
  const [isSaveClick, setIsSaveClick] = useState(false);
  const [isEditting, setIsEditting] = useState(null);
  const [text, setText] = useState("");
  const [id, setId] = useState();
  const [query, setQuery] = useState("");
  const [filterdNote, setFilteredNote] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [linkClick,setLinkClick]=useState(false);
  const[selectedNote,setSelectedNote]=useState([])

  //::::::GET FROM LOCAL STORAGE::::::::::
  useEffect(() => {
    // Load notes from local storage on component mount
    if (!notes) {
      const lStorage = JSON.parse(localStorage.getItem("Notes"));
      if (lStorage) {
        setNotes(lStorage);
      }
    } else {
      localStorage.setItem("Notes", JSON.stringify(notes));
      console.log("Stored Notes:", notes);
    }
  }, [notes]);

  function handleBtn() {
    setIsclick(!isClick);
    setIsNote(!isNote);
    
    if (!!text) {
      setText("");
    }
  }
//  useEffect(()=>{handleSearch()},[query])

// :::::::::::::::::::::Search FUNCTION ::::::::::::::::

// console.log("isSearching", isSearching) 
  function handleSearch(e) {
    // console.log("on change", e.target.value)
    setQuery(e.target.value)
    
    if(e.target.value.length > 0 ){
      setIsSearching(true)
    }else{
      setIsSearching(false)
    }

    const filteredNote = notes.filter((note) =>
      note.Text.startsWith(e.target.value)
    );
    setFilteredNote(filteredNote);
    console.log('filterafter serach',filterdNote);


    //after clearing input values..
    if(e.target.value.length <= 0){
      setLinkClick(false);
      setIsSearching(false)
    }
  }

  function handleLink(text){
    // setLinkClick(true);
    
    const selected=filterdNote.filter((note)=>note.Text===text);
    // setNotes(selected);
    console.log('notes from recommenf',selected);
    setSelectedNote(selected);
    setLinkClick(true);
    console.log('sln',selectedNote);
    setIsSearching(false);
    setQuery(text)
    
    // setText("");
  
    // setIsSearching(!isSearching)
    // sele
  
  
  }
  // ::::::::::::::::::::::::::::::::::::::::::::::

  return (
    <div className="Notes">
      <div className="items">
        <div>
          <h4>
            Notes
            <GrNotes className="note-icon" />
          </h4>
        </div>

        <div className="btn-container">
          <button onClick={handleBtn} className="note-btn">
            <LuPencilLine className="pen-icon" />
            Create Notes
          </button>
        </div>
        {/* :::::::::::::::::::::::SEARCHBAR LOGINC ::::::::::::::: */}

     
     
     
     
     
     
     
     
     
     
     
     
        
        <Search 
        onSearch={handleSearch} 
        query={query} 
        setQuery={setQuery} 
        filterdNote={filterdNote} 
        isSearching={isSearching} 
        setFilteredNote={setFilteredNote} 
        setNotes={setNotes} notes={notes} 
        setIsSearching={setIsSearching} 
        selectedNote={selectedNote} 
        setSelectedNote={setSelectedNote} 
        handleLink={handleLink}/>
{/* 
        {filterdNote.length > 0 ? (
          filterdNote.map((note) => (
            <SavedNotes key={note.id} Text={note.Text} content={note.content} />
          ))
        ) : (
          <p>No matching notes found.</p>
        )} */}

        {/* :::::::::::::::::::::::::::END SEARCH :::::::::::::::::::::::::: */}
        {/* {for} */}

        {/* ::::::::::::::::::::COMPONENTS RENDERING ::::::::::::::::::::*/}
        <div className="notescomp">
          {/* { */}
            {/* //  In here I want to add condtion that if linkClicked Render Saved note like this: */}
             
            {linkClick ? (
              <SavedNotes
                isSave={isSaveClick}
                setSave={setIsSaveClick}
                isEditting={isEditting}
                setIsEditting={setIsEditting}
                notes={selectedNote}  
                seNote={selectedNote}
                setIsNote={setIsNote}
                text={text}
                setText={setText}
                id={id}
                setId={setId}
                setNotes={setNotes}
              />
            )
            :
             
               
          
          
          
            notes?.length > 0 && !isSearching ? (
            <SavedNotes
              isSave={isSaveClick}
              setSave={setIsSaveClick}
              isEditting={isEditting}
              setIsEditting={setIsEditting}
              notes={notes}
              seNote={setNotes}
              setIsNote={setIsNote}
              text={text}
              setText={setText}
              id={id}
              setId={setId}
              setNotes={setNotes}
            />
          )
        :
        (
          <SavedNotes
            isSave={isSaveClick}
            setSave={setIsSaveClick}
            isEditting={isEditting}
            setIsEditting={setIsEditting}
            notes={filterdNote}
            seNote={filterdNote}
            setIsNote={setIsNote}
            text={text}
            setText={setText}
            id={id}
            setId={setId}
            setNotes={setNotes}
          />
        )
       

        }

       
          

          {isEditting && (
            <Note
              edittingNote={isEditting}
              setIsEditting={setIsEditting}
              setNote={setNotes}
              isSave={isSaveClick}
              setSave={setIsSaveClick}
              notes={notes}
              isNote={true}
              setIsNote={setIsNote}
              text={text}
              setText={setText}
              id={id}
              setId={setId}
            />
          )}

          {isNote && (
            <Note
              note={notes}
              setNote={setNotes}
              // id={item.id}
              isSave={isSaveClick}
              setSave={setIsSaveClick}
              setIsNote={setIsNote}
              isNote={isNote}
              text={text}
              setText={setText}
              id={id}
              setId={setId}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;
