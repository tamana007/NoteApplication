import React, { useState } from 'react'
import Note from './Note';
import { MdDeleteSweep } from "react-icons/md";
// import { MdOutlineEditAttributes } from "react-icons/md";
import { BiSolidCreditCard } from "react-icons/bi";
import Search from './Search';


function SavedNotes({isEditting,setIsEditting, Save,text,setText, setSave,notes,setNotes,setIsNote,id, setId}) {

console.log("notessss", notes)
  function handleEdit(id) {
    console.log('Editing started...',id);
    // const id=id.map((item)=>item.)

    setIsEditting(true)

    // Find the note with the specified id
    // const editedNote = notes.find((item) => item.id === id);
    console.log('Editted Note:', id);
    const editedNote = notes.find((note)=>note.id===id);
    // console.log('text here',editedNote.Text);

    console.log('editted note',editedNote);
    setText(editedNote.Text)
    setId(editedNote.id)

    // Set isNote to true to display the Note component
    //   setIsNote(true);
    //   console.log('id after click',id);
    // // }
    // setText(editedNote.Text)
    // setIsEditting(editedNote);
    // setIsNote(true);
    console.log('is editiing',isEditting);
  }
  function deleteFunc(id){
    const deleted=notes.filter((note)=>note.id!==id);
    // setNotes(deleted);
    setNotes(deleted);
    console.log('Snotes',setNotes);
    console.log('deleted note:',notes);
    

  }

  return  (
    <div className="saved-notes">
      <h4>Saved Notes</h4>
      {/* <div><Search/></div> */}
     
      {/* <div className='saved-items'> */}
      {notes?.map((savedNote) => (
        <div className='saved-container'>
        <article key={savedNote.id} className='saved-articled' >
          <div className='saved-items'>
          {savedNote.Text}
          {/* :::::::::::::::EDIT NOTE BUTTON HERE::::::::::::::::: */}
          <button onClick={()=> handleEdit(savedNote.id)}className='edit-btn'><><BiSolidCreditCard /></></button>
          <button onClick={()=>deleteFunc(savedNote.id)} className='edit-btn'><MdDeleteSweep /></button>
          </div>
        </article>
        </div>
      ))}
    {/* </div> */}
    
    </div>
    
  );
}


export default SavedNotes