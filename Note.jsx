import React from 'react'
import './Notes.scss'

function Note () {

  
  return (
    <div className='note-container'>
    <div className='text'>
      <div className='textare-container'>
          <textarea className='textarea'
            // value={editedNote}
            // onChange={}
          />
          <button className='delete-btn' type='btn'>delet</button>
          {/* <button>Save</button> */}
          </div>
        </div>
        </div>  
    
  )
}

export default Note