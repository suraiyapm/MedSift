import { Router } from "express";
const ncbi_esearch_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi';
const ncbi_efetch_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi';
const ncbi_api_key = '6bb2bc72b70584c3358ab4777c3c9f890408';

const pubmedRouter = Router();

pubmedRouter.get("/:queryTerm", async (req, res) => {
    const {queryTerm} = req.params;
    const searchParams = new URLSearchParams({
        api_key: ncbi_api_key,
        db: 'pubmed',
        term: queryTerm,
        retmode: 'json',
        retmax: 10,
        usehistory: 'y'
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const searchResult = await fetch(`${ncbi_esearch_url}?${searchParams}`).then(response => response.json());
        const queryKey = searchResult.esearchresult.querykey;
        const webenv = searchResult.esearchresult.webenv;
        const summaryParams = new URLSearchParams({
            db: 'pubmed',
            query_key: queryKey,
            WebEnv: webenv,
            retmode: 'json',
            retmax: 10
        })
        const summaryResult = await fetch(`${ncbi_efetch_url}?${summaryParams}`).then(response => response.json()); 
        res.send(summaryResult);
    } catch(error){
        console.error(error);
        res.send({ succes: false, message: "Server Error"});
    }
});

export default pubmedRouter;