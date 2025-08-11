import { useState } from 'react';
import { createNote } from '../api/index';


function NoteCreator({userId, getNotesHelper}) {

    const [newNote, setNewNote] = useState({
        text: "",
        author: ""
    });

    async function createNoteHelper() {
      const result = await createNote(newNote);
      if(result){
         alert("Note successfully created!");
         getNotesHelper();
      } else {
        alert(`${result.message}`);
      }  
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        createNoteHelper();
    }

    return (
        <>
        <div className='main-content'>
            <h2 className="bold-dark-shadow glow rounded padding2 lighting">Note Creator</h2>
            <form className='notes-form' onSubmit={handleSubmit} >
                <textarea id='notes-text-area' type="text" placeholder='Start typing...' value={newNote.text} onChange={(e) => setNewNote({ text: e.target.value, author: userId})} />
                <button id='create-notes-button' className="outline" type="submit">Create Note</button>
            </form>
        </div>        
        </>
        
    )
}


export default NoteCreator;