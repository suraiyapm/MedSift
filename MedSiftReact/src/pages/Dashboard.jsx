
import medSiftLogo from '/MedSiftLogo1-SPM.png';
import { deleteUser, getAllJournalsByUserId, deleteJournal } from '../api';
import { useEffect, useState } from 'react';

function Dashboard({userId, navigate, setUserId, setUsername}) {

  const [usersJournals, setUsersJournals] = useState([]);

  const handleDeleteUser = async (event) => {
    event.preventDefault();
    const result = await deleteUser(userId);
    if(!result.message){
      window.localStorage.removeItem('userId');
      setUserId('');
      setUsername('');
      navigate("/register");
    } else {
      alert(`${result.message}`);
    }
  };

  const getAllJournalsHelper = async() => {
    const result = await getAllJournalsByUserId(userId);
    if(result){
      if(!result.message){
      setUsersJournals(result.data);
      }
    } else {
      alert(`${result.message}`);
    }
  };
  
  const deleteJournalsHelper = async(journalId) => {
    const result = await deleteJournal(journalId);
    if(result){
        alert('Successfully deleted journal');
        getAllJournalsHelper();
    } else {
      alert(`${result.message}`);
    }

  }
  useEffect(() => {
    getAllJournalsHelper();
  }, []);

    return (
        <>
      <div className='main-content'> 
        <a href="https://github.com/mrDNA219/3140_Project" target="_blank">
          <img src={medSiftLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Dashboard</h1>

        {/* theme stuff not finished yet! */}
        <button id="theme-button">Swap</button>

        <script>
          const themeButton = document.getElementById('theme-button');
          const body = document.body;
          body.classList.add('light');
          themeButton.addEventListener('click', )
        </script>

        <h2>Saved Journals:</h2>
        {
          usersJournals.length ? usersJournals.map((jrn) => {
            const {title, authors, journal, pubdate, pages, volume, issue, elocationid, _id} = jrn;
            return (
              <div key={_id} className='card'>
                <h2>Title</h2>
                <p>{title}</p>
                <h2>Authors</h2>
                <p>{authors}</p>
                <h2>Journal</h2>
                <p>{journal}</p>
                <h2>Publish Date</h2>
                <p>{pubdate}</p>
                <h2>Pages</h2>
                <p>{pages}</p>
                <h2>Volume</h2>
                <p>{volume}</p>
                <h2>Issue</h2>
                <p>{issue}</p>
                <h2>ElocationId</h2>
                <p>{elocationid}</p>
                <button onClick={() => {
                  deleteJournalsHelper(_id);
                }}>Delete Journal</button>
              </div>
            )
          }) : 
          <div className='card'>
            <p>No Saved Journals</p>
          </div>
        }
        <button style={{color: 'red'}}onClick={handleDeleteUser}>DELETE ACCOUNT</button>
      </div>
        </>
    )
}

export default Dashboard;