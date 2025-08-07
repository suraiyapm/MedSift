import { fetchPubMedPapers, createJournal } from "../api";
import { useEffect, useState } from "react";

function Journals({userId}) {
    const [journals, setJournals] = useState([]);
    const [journalSearch, setJournalSearch] = useState('');

const fetchPapersHelper = async (e) => {
    e.preventDefault();
    let result = await fetchPubMedPapers(journalSearch);
    if(result){
        const formattedJournals = transformJournalData(result.result);
        setJournals(formattedJournals);
    }
};

function transformJournalData(apiData) {
  const { uids = [] } = apiData;

  return uids.map(uid => {
    const journal = apiData[uid];
    return {
      title: journal.title,
      authors: journal.authors.map(a => a.name).join(', '),
      journal: journal.fulljournalname,
      pubdate: journal.pubdate,
      doi: (journal.articleids.find(id => id.idtype === 'doi') || {}).value,
      pages: journal.pages,
      volume: journal.volume,
      issue: journal.issue,
      pubtype: journal.pubtype,
      language: journal.lang,
      elocationid: journal.elocationid,
      uid: journal.uid
    };
  });
};

async function createJournalHelper(journal){
    const result = await createJournal(journal);
    if(!result.message){
        alert('Successfully saved journal');
    } else {
        alert(`${result.message}`);
    }
} 

    return ( 
    <div className="main-content">
        <h1 className="header1 frosted-more lighting">Search Medical Journals</h1>
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={fetchPapersHelper}>
            <input style={{margin: '1rem'}}name='formInput' type="text" value={journalSearch} placeholder='enter search query' onChange={(e) => setJournalSearch(e.target.value)}></input>
            <button type="submit">Search</button>
        </form>
        {
            journals.length ? journals.map((journal) => {
                return (
                    <div key={journal.uid} className="card">
                    {
                        
                        Object.entries(journal).map(([key, value]) =>  {
                            return (
                                <div key={Math.floor(Math.random() * (100000000 - 0 + 1))}>
                                <h1 style={{fontSize: '26px'}}>{key}</h1>
                                <p>{value}</p>
                                </div>
                            )
                        })
                    }    
                    <button onClick={(e) => {
                        e.preventDefault();
                        createJournalHelper({user: userId, ...journal});
                    }} >Save Journal</button>
                    </div>
                );
            }) : 
             <div className="card frosted-more lighting">
                <p className="white-text">Enter a search query to find medical journals</p>    
            </div>
        }
    </div>
    );
}

export default Journals;