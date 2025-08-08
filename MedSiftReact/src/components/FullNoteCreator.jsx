import { useEffect, useState } from "react";
import { createFullJournal } from "../api";

function FullNoteCreator({journal, userId, token}) {

    const [fullJournalText, setFullJournalText] = useState('');

    async function createFullJournalHelper(journal){
    const result = await createFullJournal(token, journal);
    if(!result.message){
        alert('Successfully saved journal');
    } else {
        alert(`${result.message}`);
    }
}; 

    useEffect(() => {
        setFullJournalText(journal);
    }, []);

    return (
        <div className="card">
            <textarea type='text' value={fullJournalText} onChange={(e) => { 
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