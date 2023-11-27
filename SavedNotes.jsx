import React, { useState } from 'react'
import Note from './Note';
// import { MdOutlineEditAttributes } from "react-icons/md";
import { BiSolidCreditCard } from "react-icons/bi";


function SavedNotes({isSave,setText, setSave,notes,seNotes,setIsNote}) {
  const[isEditting,setIsEditting]=useState(null);


  function handleEdit(id) {
    console.log('Editing started...',id);

    // Find the note with the specified id
    const editedNote = notes.find((item) => item.id === id);
    console.log('Editted Note:', editedNote);


      // Set isNote to true to display the Note component
      setIsNote(true);
      console.log('id after click',id);
    // }
    setText(editedNote.Text)
    setIsEditting(editedNote);
    setIsNote(true);
    console.log('is editiing',isEditting);
  }

  return  (
    <div className="saved-notes">
      <h4>Saved Notes</h4>
      {/* <div className='saved-items'> */}
      {notes.map((savedNote) => (
        <div className='saved-container'>
        <article key={savedNote.id} className='saved-articled' >
          <div className='saved-items'>
          {savedNote.Text}
          {/* :::::::::::::::EDIT NOTE BUTTON HERE::::::::::::::::: */}
          <button onClick={()=> handleEdit(savedNote.id)}className='edit-btn'><><BiSolidCreditCard /></></button>
          </div>
        </article>
        </div>
      ))}
    {/* </div> */}
    
    </div>
  );
}


export default SavedNotes