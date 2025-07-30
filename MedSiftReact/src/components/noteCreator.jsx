import { useState, useEffect } from 'react';
import { createNote } from '../api/index';
import { get } from 'mongoose';


function NoteCreator({userId, getNotesHelper}) {

    const [newNote, setNewNote] = useState({
        text: "",
        author: ""
    });
        console.log("userId:", userId);
        console.log(newNote);

    async function createNoteHelper(userId) {
      const result = await createNote(newNote);
      console.log("this is the result:",result);
      if(result){
         alert("Note successfully created!");
        console.log(result.data);
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
            <form onSubmit={handleSubmit} >
                <h2>Note Creator</h2>
                <input type="text" placeholder="insert note text here!" value={newNote.text} onChange={(e) => setNewNote({ text: e.target.value, author: userId})} />
                <button type="submit">Create Note</button>
            </form>
        </div>        
        </>
        
    )
}


export default NoteCreator;