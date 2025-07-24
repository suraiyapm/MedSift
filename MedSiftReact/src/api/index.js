//we will un-comment this when we are ready to connect to database ---->
// const base_url = "medsift.j5r1iba.mongodb.net";
const base_url = 'http://localhost:3000';

function createHeaders()
{
    return {
        'Content-Type': 'application/json',
      };
}

export const getAllNotes = async () => {
    try {
        const headers = createHeaders();
        return await fetch(`${base_url}/api/notes`, headers).then(response => response.json());
    } catch (error){
        console.log(error);
    }
}

