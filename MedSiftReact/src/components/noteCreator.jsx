import { useState, useEffect } from 'react';
import { createNote } from '../api/index';


function NoteCreator({userId, getNotesHelper}) {

    const [newNote, setNewNote] = useState({
        text: "",
        author: ""
    });

    async function createNoteHelper(userId) {
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
        createNoteHelper(userId);
    }

    useEffect(() => {
    }, []);

    return (
        <>
        <div className='main-content'>
            <h2>Note Creator</h2>
            <form className='notes-form' onSubmit={handleSubmit} >
                <textarea id='notes-text-area' type="text" placeholder="insert note text here!" value={newNote.text} onChange={(e) => setNewNote({ text: e.target.value, author: userId})} />
                <button id='create-notes-button' type="submit">Create Note</button>
            </form>
        </div>        
        </>
        
    )
}


export default NoteCreator;