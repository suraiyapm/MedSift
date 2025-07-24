import { useEffect, useState } from 'react';
import { getAllNotes } from '../api';        


function Notes() {
    const [notes, setNotes] = useState([]);

    async function getNotesHelper(){
        const result = await getAllNotes();
        if(result){
            setNotes(result);
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
                notes ? notes.map((note) => 
                {
                    const {noteName , text} = note;
                    return (
                    <div className='card'>
                        <h1>{noteName}</h1>
                        <p>{text}</p>
                    </div>
                    );
                }) : 
                    <div className='card'>
                        <p>This will be the Notes page</p>
                    </div>
            }
        </div>
    </div>
    </>
    );
}

export default Notes;