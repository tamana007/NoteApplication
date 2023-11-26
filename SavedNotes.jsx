import React from 'react'

function SavedNotes({isSave,setSave,notes}) {

  return  (
    <div className="saved-notes">
      <h4>Saved Notes</h4>
      {notes.map((savedNote) => (
        <div key={savedNote.id} className="saved">
          {savedNote.Text}
        </div>
      ))}
    </div>
  );
}


export default SavedNotes