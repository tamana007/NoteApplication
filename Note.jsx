import React, { useState } from "react";
import "./Notes.scss";
import { MdDeleteSweep } from "react-icons/md";

function Note({ note, setNote, id, isSave, setSave }) {
  console.log("my note here", note);

  const [text, setText] = useState("");

  //::::::::::::SAVE Function:::::::::::::::::::::::::
  function handleSave(p) {
    if (text) {
      // setNote((v) => [...note, { id: v.length + 1, Text: text }]);
      setSave(!isSave);
      console.log("save from set", isSave);
    }
    // console.log('note in save',note);
    // console.log('txt here',text);
  }
  //::::::::::::::::::::::DELETE Function::::::::::::::::

  function handleDelete() {
    // const updateNote=note.filter((item)=>item.id !==id)
    // console.log('handled delete');
    // setNote(updateNote)

    const newNote = note.filter((note) => note.id !== id);
    setNote(newNote);
    // console.log("newNote", newNote);
    // console.log("from delete", note);
  }
  return (
    <div className="note-container">
      {/* <div className={`note-container ${isSave ? "saved" : "note-container"}`}> */}
 <div className="text">
        <div className={`mini-container ${isSave?"saved":""}`}>
          
          {/* It is only white area container */}
          <div
            className={`textare-container`}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          >
            <textarea className="textarea" />
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
