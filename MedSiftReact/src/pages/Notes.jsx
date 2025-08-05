import { useEffect, useState } from 'react';
import { getAllNotes, getAllNotesByAuthorId, deleteNote} from '../api';        
import { NoteCreator } from '../components';

function Notes({userId}) {
    
    const [notes, setNotes] = useState([]);
 
    async function getNotesHelper(){
        const result = await getAllNotesByAuthorId(userId); 
            if(result){
                setNotes(result);
            } else {
                console.error("error getting notes");
            }
    };

    async function deleteNotesHelper(noteId){
        const result = await deleteNote(noteId);
        if(result){
            getNotesHelper();
        } else {
            alert(`${result.message}`);
        }
    }
    

    useEffect(() => {
        getNotesHelper();
    }, [userId]);

    return (
    <>
    <div className='main-content'>
        <NoteCreator userId={userId} getNotesHelper={getNotesHelper}></NoteCreator>
        <div className='main-content'>
            {
                notes.length ? notes.map((note) => 
                {
                    return (
                    <div key={note._id} className='card'>
                        <p>{note.text}</p>
                        <button onClick={(e) => {
                            e.preventDefault();
                            deleteNotesHelper(note._id);
                        }}>Delete Note</button>
                    </div>
                    );
                }) : 
                    <div className='card'>
                        <p>Notes empty...please login or create a note!</p>
                    </div> 
            }
        </div>
    </div>
    </>
    );
}

export default Notes;