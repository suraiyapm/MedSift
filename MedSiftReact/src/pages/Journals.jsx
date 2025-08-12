import { fetchPubMedPapers } from "../api";
import { useEffect, useState } from "react";
import { FullNoteCreator } from "../components";

function Journals({userId, token}) {

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
};

const fetchPapersHelper = async (e) => {
    e.preventDefault();
    let result = await fetchPubMedPapers(journalSearch);
    if(result){
        let formatedArticles = splitArticlesStrict(result);
        setJournals(formatedArticles);
    }
};

    return ( 
        <>
        <h1>Search Medical Journals</h1>
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={fetchPapersHelper}>
            <input style={{margin: '1rem'}}name='formInput' type="text" value={journalSearch} placeholder='enter search query' onChange={(e) => setJournalSearch(e.target.value)}></input>
            <button type="submit" className="header1 outline">Search</button>
        </form>
        {
            journals.length ? journals.map((journal) => {
                return (
                    <FullNoteCreator key={Math.floor(Math.random() * (100000000 - 0 + 1))} token={token} journal={journal} userId={userId}></FullNoteCreator>
                );
            }) : <div className="card">
                <p className="white-text outline">Please input a search query to view NCBI journals</p>
            </div>
        }
        </>
    );
};

export default Journals;