import React, { useState } from 'react'
import Note from './Note';
// import { MdOutlineEditAttributes } from "react-icons/md";
import { BiSolidCreditCard } from "react-icons/bi";


function SavedNotes({isSave,setSave,notes,seNotes,setIsNote}) {
  const[edittingNote,setEdittinNote]=useState(null);


  // function handleEdit({id}){
  //   console.log('editing started.....');
  //   console.log('id from edit func ',id);
  //   const edittedArr=notes.map((item)=>item.id===id)
  //   // setNotes(edittedArr);
  //   console.log('editted array',edittedArr);
  //   // setIsNote(true);
    
    
    

  // }

  function handleEdit(id) {
    console.log('Editing started...',id);

    // Find the note with the specified id
    const editedNote = notes.find((item) => item.id === id);
    console.log('Editted Note:', editedNote);

    // Set the text of the edited note in the state
    // seNotes((p)=>p.map((note)=>note.id===id ? {...note, Text: editedNote.Text}:note))



    // if (editedNote) {
    //   setNotes((prevNotes) =>
    //     prevNotes.map((note) =>
    //       note.id === id ? { ...note, Text: editedNote.Text } : note
    //     )
    //   );
      console.log('after function',seNotes);

      // Set isNote to true to display the Note component
      setIsNote(true);
      console.log('id after click',id);
    // }
    setEdittinNote(editedNote);
    setIsNote(true);
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
    {edittingNote && (
        <Note
          note={edittingNote}
          setNote={seNotes}
          isSave={isSave}
          setSave={setSave}
          setIsNote={setIsNote}
          isNote={true}
        />
      )}
    </div>
  );
}


export default SavedNotes