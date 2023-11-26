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
  // const [saveNote,setSaveNote]=useState()

  function handleBtn() {
    setIsclick(!isClick);
    // if (!isClick) {
    //   setNotes((prev) => [...note, { id: prev.length + 1, Text: "new note" }]);
    //   // console.log(note);
    //   setIsSaveClick(!true)
    // }

    setIsNote(true);
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
        <div className="notescomp">
          {isSaveClick && (
            <SavedNotes 
            isSave={isSaveClick}
              setSave={setIsSaveClick}
              notes={notes}
              seNote={setNotes}
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

          {isNote && (
            <Note
              note={notes}
              setNote={setNotes}
              // id={item.id}
              isSave={isSaveClick}
              setSave={setIsSaveClick}
            setIsNote={setIsNote}
            isNote={isNote}
            
            />
            
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Notes;
