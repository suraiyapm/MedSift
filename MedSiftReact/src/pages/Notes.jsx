import { useEffect, useState } from 'react';
import { getAllNotes } from '../api';        


function Notes() {
    const [notes, setNotes] = useState([]);

    async function getNotesHelper(){
        const result = await getAllNotes();
        if(result){
            setNotes(result.data);
        } else {
            console.error("error getting notes");
        }
    }
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
                        <p>Notes empty...check connection to server</p>
                    </div>
            }
        </div>
    </div>
    </>
    );
}

export default Notes;