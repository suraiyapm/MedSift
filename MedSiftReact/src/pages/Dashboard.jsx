
import medSiftLogo from '/MedSiftLogo1-SPM.png';
import { deleteUser, getAllJournalsByUserId, deleteJournal, getAllUsersFullJournalsByUserId, deleteFullJournal} from '../api';
import { useEffect, useRef, useState } from 'react';

function Dashboard({userId, navigate, setUserId, setUsername}) {
  const [fullJournals, setFullJournals] = useState([]);
  const [usersJournals, setUsersJournals] = useState([]);
  const hasPageBeenRendered = useRef(false);

  const handleDeleteUser = async (event) => {
    event.preventDefault();
    const result = await deleteUser(userId);
    if(result){
      window.localStorage.removeItem('userId');
      setUserId('');
      setUsername('');
      navigate("/register");
    } else {
      alert(`${result.message}`);
    }
  };

  const getAllJournalsHelper = async(userId) => {
    if(userId !== undefined){
    const result = await getAllJournalsByUserId(userId);
    if(result){
      setUsersJournals(result.data);
    }
    }
  };

  const getAllFullJournalsHelper = async(userId) => {
    if(userId !== undefined){
      const result = await getAllUsersFullJournalsByUserId(userId);
    if(result){
      setFullJournals(result.data);
    }
    }
  }; 
  
  const deleteJournalsHelper = async(journalId) => {
    const result = await deleteJournal(journalId);
    if(result){
        getAllJournalsHelper(userId);
    } else {
      alert(`${result.message}`);
    }
  };

  const deleteFullJournalHelper = async(fullJournalId) => {
    const result = await deleteFullJournal(fullJournalId);
    if(result){
      getAllFullJournalsHelper(userId);
    } else {
      alert(`${result.message}`);
    }
  };

  useEffect(() => {
    if(hasPageBeenRendered.current){
    getAllJournalsHelper(userId);
    getAllFullJournalsHelper(userId);
    }
    hasPageBeenRendered.current = true;
  }, [userId]);

    return (
        <>
      <div className='main-content'> 
        <a href="https://github.com/mrDNA219/3140_Project" target="_blank">
          <img src={medSiftLogo} className="logo lighting" alt="Vite logo"/>
        </a>
        <h1 className="header1 lighting">Dashboard</h1>

        {/* theme stuff not finished yet! */}
        {/* <button id="theme-button">Swap</button> */}

        {/* <script>
          const themeButton = document.getElementById('theme-button');
          const body = document.body;
          body.classList.add('light');
          themeButton.addEventListener('click', )
        </script> */}
        <h2>Saved Full Journals</h2>
        {
          fullJournals ? fullJournals.map((fullJournal) => {
            const {_id, text} = fullJournal;
            return (
                <div key={_id} className='card'>
                  <textarea defaultValue={text}></textarea>
                  <button onClick={(e) => {
                    e.preventDefault();
                    deleteFullJournalHelper(_id);
                  }}>Delete Full Journal</button>
                </div>
            )
          }) : 
          <div className='card'>
            <p>No Saved Full Journals</p>
          </div>
        }

        <h2 className="header1 lighting">Saved Journal Summaries:</h2>
        {
          usersJournals ? usersJournals.map((jrn) => {
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
                <button onClick={(e) => {
                  e.preventDefault();
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