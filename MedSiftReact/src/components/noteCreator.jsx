import { useState } from 'react';
import { createNote } from '../api/index';
import { ToastContainer, toast } from 'react-toastify';


function NoteCreator({userId, getNotesHelper, token}) {

    const [newNote, setNewNote] = useState({
        text: "",
        author: ""
    });

    async function createNoteHelper() {
        console.log("token near note creator: ", token);
      const result = await createNote(token, newNote);
      if(result){
         toast("Note successfully created!");
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
        <ToastContainer />
        <div className='main-content'>
            <h1>Note Creator</h1>
            <form onSubmit={handleSubmit} >
                <textarea type="text" placeholder='Start typing...' value={newNote.text} onChange={(e) => setNewNote({ text: e.target.value, author: userId})} />
                <button className="header1 outline" type="submit">Create Note</button>
            </form>
        </div>        
        </>
        
    )
}


export default NoteCreator;