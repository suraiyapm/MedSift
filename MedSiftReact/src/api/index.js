//we will un-comment this when we are ready to connect to database ---->

// const base_url = "medsift.j5r1iba.mongodb.net";
const base_url = 'http://localhost:3000';
const ncbi_esearch_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi';
const ncbi_efetch_url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcig';
const ncbi_api_key = '6bb2bc72b70584c3358ab4777c3c9f890408';

function createHeaders(token)
{
    return token ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      } : {
        'Content-Type': 'application/json',
      }
}

export const getAllNotes = async () => {
    try {
        const headers = createHeaders();
        return await fetch(`${base_url}/api/notes`, headers).then(response => response.json());
    } catch (error){
        console.log(error);
    }
}

//think about changing authorId to userId

export const getAllNotesByAuthorId = async (authorId) => {
    try{
        const headers = createHeaders();
        return await fetch(`${base_url}/api/notes/${authorId}`, headers).then(response => response.json());
    } catch (error) {
        console.log(error);
    }
}


export const registerUser = async ({...newUser}) => {
    try{
        const headers = createHeaders();
        return await fetch(`${base_url}/api/users/register`, {
        method: 'POST',
        headers,
        body: JSON.stringify(newUser)
        }).then(response => response.json());
    } catch (error){
        console.error(error);
    }
}

export const loginUser = async ({...loginInfo}) => {
    try{
        const headers = createHeaders();
        return await fetch(`${base_url}/api/users/login`, {
            method: 'POST',
            headers,
            body: JSON.stringify(loginInfo)
        }).then(response => response.json());
    } catch (error) {
        console.error(error);
    }
}


export const createNote = async (token, {...newNote}) => {
    try{
        const headers = createHeaders(token);
        return await fetch(`${base_url}/api/notes`, {
            method: 'POST',
            headers,
            body: JSON.stringify(newNote)
        }).then(response => response.json());
    } catch (error){
        console.error(error);
    }
}

export const deleteUser = async (userId) => {
    try {
        const headers = createHeaders();
        return await fetch(`${base_url}/api/users/${userId}`, {
            method: 'DELETE',
            headers,
        }).then(response => response.json()); 
    } catch (error){
        console.error(error);
    }
}


export const fetchPubMedPapers = async (queryTerm) => {
    try {
        return await fetch(`${base_url}/api/pubmed/${queryTerm}`).then(response => response.text());
    } catch(error){
        console.error(error);
    }
}

export const fetchPubMedSummaries = async (queryTerm) => {
    try{
        return await fetch(`${base_url}/api/pubmedSummary/${queryTerm}`).then(response => response.json());
    } catch (error) {
        console.error(error);
    }
}


export const createJournal = async (token, {...journal}) => {
    try{
        const headers = createHeaders(token);
        return await fetch(`${base_url}/api/journals`, {
            method: 'POST',
            headers,
            body: JSON.stringify(journal)
        }).then(response => response.json());
    } catch (error){
        console.error(error);
    }
};

export const createFullJournal = async (token, {...fullJournal}) => {
    try {
        const headers = createHeaders(token);
        return await fetch(`${base_url}/api/fullJournals`, {
            method: 'POST',
            headers,
            body: JSON.stringify(fullJournal)
        }).then(response => response.json());
    } catch (error) {
        console.error(error);
    }
}

export const getAllJournalsByUserId = async (token, userId) => {
    try {
        const headers = createHeaders(token);
        return await fetch(`${base_url}/api/journals/${userId}`, {
            headers
        }).then(response => response.json());
    } catch (error){
        console.error(error);
    }
};

export const getAllUsersFullJournalsByUserId = async (token, userId) => {
    try {
        const headers = createHeaders(token);
        return await fetch(`${base_url}/api/fullJournals/${userId}`, {
            headers
        }).then(response => response.json());
    } catch (error){
        console.error(error);
    }
}

export const deleteNote = async (token, noteId) => {
    try {
        const headers = createHeaders(token);
        return await fetch(`${base_url}/api/notes/${noteId}`, {
            method: 'DELETE',
            headers
        }).then(response => response.json());
    } catch (error){
        console.error(error);
    }
};

export const deleteJournal = async (token, journalId) => {
    try {
        const headers = createHeaders(token);
        return await fetch(`${base_url}/api/journals/${journalId}`, {
             method: 'DELETE', 
             headers}).then(response => response.json());
    } catch (error){
        console.error(error);
    }
};

export const deleteFullJournal = async (token, fullJournalId) => {
    try {
        const headers = createHeaders(token);
        return await fetch(`${base_url}/api/fullJournals/${fullJournalId}`, {
            method: "DELETE",
            headers
        }).then(response => response.json());
    } catch (error) {
        console.error(error);
    }
}