import React, { useState } from 'react'
import Note from './Note'
import './Notes.scss'


function Notes() {
 const [isClick,setIsclick]=useState(false);
const [note,setNote]=useState([]);

function handleBtn(){
  setIsclick(!isClick);
  if (!isClick){
    setNote((prev)=>[...note,{id:prev.length+1,Text:'new note'}])
    console.log(note);
  }
}

  return (
    <div className='Notes'> 
    <div className='items'>
     <h4 >Notes</h4>
      <button onClick={handleBtn}  className='note-btn'>Create Notes</button>
      <div className='notescom'>
        {note.map((item)=>{return <Note key={item.id}/>})}
      
      {/* <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/> */}
      </div>
    </div>
    </div>
  )
}

export default Notes