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
        <NoteCreator userId={userId} getNotesHelper={getNotesHelper}></NoteCreator>
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
                    <div className='card rounded lighting frosted-more white-text outline'>
                        <p>Notes empty...please login or create a note!</p>
                    </div> 
            }
    </>
    );
}

export default Notes;