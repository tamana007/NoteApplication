import React, { useState } from "react";
import Note from "./Note";
import "./Notes.scss";
import { GrNotes } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
// import { MdDeleteSweep } from "react-icons/md";
// import {<FontAwesomeIcon icon="fa-solid fa-notes" />} from 'react-icon/fa'

function Notes() {
  const [isClick, setIsclick] = useState(false);
  const [note, setNote] = useState([]);
  const [isSaveClick, setIsSaveClick] = useState(false);

  function handleBtn() {
    setIsclick(!isClick);
    if (!isClick) {
      setNote((prev) => [...note, { id: prev.length + 1, Text: "new note" }]);
      console.log(note);
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
        <div className="notescomp">
          {note.map((item) => {
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
          })}
        </div>
      </div>
    </div>
  );
}

export default Notes;
