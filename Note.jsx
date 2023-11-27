import React, { useState } from "react";
import "./Notes.scss";
import { MdDeleteSweep } from "react-icons/md";

function Note({ note, text, setText, setIsNote, edittingNote,setIsEditting, setNote, id, isSave, setSave }) {
  console.log("my note here", note);


  //::::::::::::SAVE Function:::::::::::::::::::::::::
  function handleSave(p) {
    if(edittingNote){
    }
    if (text) {
      setSave(!isSave);
      console.log("save from set", isSave);
    }
    setNote((prev) => [...note, { id: Math.floor(Math.random()*1000), Text: text }]);
      setIsNote(false)
      // setIsEditting()

  }
  //::::::::::::::::::::::DELETE Function::::::::::::::::

  function handleDelete() {
    const newNote = note.filter((note) => note.id !== id);
    setNote(newNote);
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
            <button onClick={() => handleDelete()} type="btn">
              <MdDeleteSweep className="handle-btn" />
            </button>
            <div className="handle-btn">
              <button onClick={handleSave} className="save-btn" type="btn">
                save
              </button>
              <button
                onClick={() => handleDelete()}
                className="delete-btn"
                type="btn"
              >
                <MdDeleteSweep />
              </button>
            </div>

            {/* <button>Save</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
