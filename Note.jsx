import React, { useEffect, useState } from "react";
import "./Notes.scss";
import { MdDeleteSweep } from "react-icons/md";

function Note({ notes, text, setText, edittingNote,setIsEditting, setNote, id, isSave, setSave,setIsNote }) {
  console.log("my note here", notes);
  console.log("editingNote", edittingNote);

  

 
  function handleSave() {

    //editing mode
      if (edittingNote) {
        // If editing, update the existing note
        const updatedNote = notes.map((item)=>{
          if(item.id === id){
            item.Text = text
          }
          return item;
        })
        // console.log('edit mode',updatedNote)
        setNote(updatedNote);
        // setNote((prevNotes) =>
        //   prevNotes.map((n) => (n.id === edittingNote.id ? { ...n, Text: text } : n))
        // );
        setIsEditting(!edittingNote);

      } 
      
      //creating mode..
      else {
        // If creating a new note
        
        setNote((prev)=>{
          if (prev == null){
            return [{id: Math.floor(Math.random() * 1000), Text:text}]
          }else{
            return [...prev,{id: Math.floor(Math.random() * 1000), Text:text}]
          }
        })
        setIsNote(false)
        // console.log('Notes in creating mode',notes);
        
      }
  
      setSave(!isSave);
      setText('');
      // setIsNote(false);
  }
  //::::::::::::::::::::::DELETE Function::::::::::::::::

  function handleDelete() {
    const newNote = notes.filter((note) => note.id !== id);
    setNote(newNote);
    // console.log('note----',notes);
  }
  return (
    <div className="note-container">
      
 <div className="text">
        <div className={`mini-container ${isSave?"saved":"mini-container"}`}>
          
          {/* It is only white area container */}
          <div
            className={`textare-container`}
            
          >
            <textarea 
            value={text}
            onChange={(e) => {
            setText(e.target.value);
            }}
            placeholder="Write somehting here..."
            className="textarea" />
            {/* <button onClick={() => handleDelete()} type="btn">
              <MdDeleteSweep className="handle-btn" />
            </button> */}
            <div className="handle-btn">
              <button onClick={handleSave} className="save-btn" type="btn">
                save
              </button>
              {/* <button
                onClick={() => handleDelete()}
                className="delete-btn"
                type="btn"
              >
                
              </button> */}
            </div>

            {/* <button>Save</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
