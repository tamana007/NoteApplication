import React, { useState } from "react";
import Note from "./Note";
import "./Notes.scss";
import { GrNotes } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
import SavedNotes from "./SavedNotes";
// import { MdDeleteSweep } from "react-icons/md";
// import {<FontAwesomeIcon icon="fa-solid fa-notes" />} from 'react-icon/fa'

function Notes() {
  const [isClick, setIsclick] = useState(false);
  const [isNote, setIsNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isSaveClick, setIsSaveClick] = useState(false);
  const[isEditting, setIsEditting]=useState(null);
  const [text, setText] = useState("");
  const [id, setId] = useState();


  // const [saveNote,setSaveNote]=useState()

  function handleBtn() {
    setIsclick(!isClick);
    // console.log('ID goes lere',id);
    // console.log('notes',notes);
    // const noteIds=notes.map((note)=>note.id);
    // setId(noteIds[2])
    // console.log('Now lets get ID',id);
    
    // if (!isEditting) {
    //   setId((prev) => [...id, { id: prev.id}]);
    //   console.log('changed id',id);
    //   setIsSaveClick(!true)
    // }

    setIsNote(!isNote);
    if(!!text){
      setText("")
    }
  }
  

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
        {/* ::::::::::::::::::::COMPONENTS RENDERING ::::::::::::::::::::*/}

        <div className="notescomp">
          {notes.length > 0 && (
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
          )}

          {/* <SavedNotes savedNotes={saveNote}/> */}
          {/* {note.map((item) => {
            return (
              <Note
                key={item.id}
                note={note}
                setNote={setNote}
                id={item.id}
                isSave={isSaveClick}
                setSave={setIsSaveClick}
              />
            );
          })} */}

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
