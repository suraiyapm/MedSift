import { useEffect, useState } from 'react';
import { getAllNotes, getAllNotesByAuthorId} from '../api';        


function Notes({userId}) {
    const [notes, setNotes] = useState([]);
 
    async function getNotesHelper(){
        if(userId){
        const result = await getAllNotesByAuthorId(userId); 
            if(result){
                setNotes(result);
            } else {
                console.error("error getting notes");
            }
        }
    };
    

    useEffect(() => {
        getNotesHelper();
    }, []);

    return (
    <>
    <div className='main-content'>
        <div className='main-content'>
            {
                notes.length ? notes.map((note) => 
                {
                    return (
                    <div key={note._id} className='card'>
                        <p>{note.text}</p>
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