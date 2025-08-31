import { useEffect, useState } from "react";
import { createFullJournal } from "../api";
import { ToastContainer, toast } from 'react-toastify';

function FullNoteCreator({journal, userId, token}) {

    const [fullJournalText, setFullJournalText] = useState('');

    async function createFullJournalHelper(journal){
    const result = await createFullJournal(token, journal);
    if(!result.message){
        toast('Successfully saved journal');
    } else {
        alert(`${result.message}`);
    }
}; 

    useEffect(() => {
        setFullJournalText(journal);
    }, []);

    return (
        <div className="card">
            <ToastContainer />
            <textarea spellCheck="false" type='text' value={fullJournalText} onChange={(e) => { 
                e.preventDefault();
                setFullJournalText(e.target.value)}}
                ></textarea>
            <button onClick={() => {
                createFullJournalHelper({user: userId, text: fullJournalText});
            }}>Save Journal</button>
        </div>
    );
}; 



export default FullNoteCreator;