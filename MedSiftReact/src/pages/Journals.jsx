import { fetchPubMedPapers, createFullJournal } from "../api";
import { useEffect, useState } from "react";

function Journals({userId}) {

    const [journals, setJournals] = useState('');
    const [journalSearch, setJournalSearch] = useState('');

function splitArticlesStrict(rawText) {
  const pmidMatches = [...rawText.matchAll(/PMID:\s*\d+/g)];
  const chunks = rawText.split(/PMID:\s*\d+\s*/);
  const articles = [];
  for (let i = 0; i < chunks.length - 1; i++) {
    let articleBody = chunks[i].trim();
    let pmidLine = pmidMatches[i][0];
    const nextChunk = chunks[i + 1];
    const nextLines = nextChunk.split('\n');
    const nextStart = nextLines.find(line => /^\d+\.\s/.test(line.trim()));
    const nextArticleStart = nextStart ? nextStart.trim() : '';
    const fullArticle = `${articleBody}\n${pmidLine}`;
    articles.push(fullArticle.trim());
    if (nextArticleStart) {
      chunks[i + 1] = nextChunk.slice(nextChunk.indexOf(nextArticleStart));
    }
  }
  return articles;
}

const fetchPapersHelper = async (e) => {
    e.preventDefault();
    let result = await fetchPubMedPapers(journalSearch);
    if(result){
        let formatedArticles = splitArticlesStrict(result);
        setJournals(formatedArticles);
    }
};

async function createFullJournalHelper(journal){
    const result = await createFullJournal(journal);
    if(!result.message){
        alert('Successfully saved journal');
    } else {
        alert(`${result.message}`);
    }
} 

    return ( 
    <div className="main-content">
        <h1>Search Medical Journals</h1>
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={fetchPapersHelper}>
            <input style={{margin: '1rem'}}name='formInput' type="text" value={journalSearch} placeholder='enter search query' onChange={(e) => setJournalSearch(e.target.value)}></input>
            <button type="submit">Search</button>
        </form>
        {
            journals.length ? journals.map((journal) => {
                return (
                    <div key={Math.floor(Math.random() * (100000000 - 0 + 1))} className="card">
                        <p>{journal}</p>
                        <button onClick={() => {
                            createFullJournalHelper({user: userId, text: journal});
                        }}>Save Journal</button>
                    </div>
                );
            }) : <div className="card">
                <p>Please input a search query to view NCBI journals</p>
            </div>
        }
    </div>
    );
}

export default Journals;