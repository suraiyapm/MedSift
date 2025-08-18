
import medSiftLogo from '/MedSiftLogo1-SPM.png';
import { deleteUser, getAllJournalsByUserId, deleteJournal, getAllUsersFullJournalsByUserId, deleteFullJournal, updateFullJournal} from '../api';
import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Dashboard({userId, navigate, setUserId, setUsername, token, username}) {
  const [fullJournals, setFullJournals] = useState([]);
  const [usersJournals, setUsersJournals] = useState([]);
  const [newFullJournalText, setNewFullJournalText] = useState('');
  const hasPageBeenRendered = useRef(false);

  const handleDeleteUser = async (e) => {
    e.preventDefault();
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

  const getAllJournalsHelper = async(token, userId) => {
    if(userId !== undefined){
    const result = await getAllJournalsByUserId(token, userId);
    if(result){
      setUsersJournals(result.data);
    }
    }
  };

  const getAllFullJournalsHelper = async(token, userId) => {
    if(userId !== undefined){
      const result = await getAllUsersFullJournalsByUserId(token, userId);
    if(result){
      setFullJournals(result.data);
    }
    }
  }; 
  
  const deleteJournalsHelper = async(token, journalId) => {
    const result = await deleteJournal(token, journalId);
    if(result){
        getAllJournalsHelper(token, userId);
    } else {
      alert(`${result.message}`);
    }
  };

  const deleteFullJournalHelper = async(token, fullJournalId) => {
    const result = await deleteFullJournal(token, fullJournalId);
    if(result){
      getAllFullJournalsHelper(token, userId);
    } else {
      alert(`${result.message}`);
    }
  };

  const updateFullJournalHelper = async(token, fullJournalId, updatedText) => {
    const result = await updateFullJournal(token, fullJournalId, updatedText);
    if(result) {
      toast('Succuessfully updated Journal!');
      getAllFullJournalsHelper(token, userId);
    } else {
      alert(`${result.message}`);
    }
   }

  useEffect(() => {
    if(hasPageBeenRendered.current){
    getAllJournalsHelper(token, userId);
    getAllFullJournalsHelper(token, userId);
    }
    hasPageBeenRendered.current = true;
  }, [userId]);

    return (
        <>
        <ToastContainer />
        <div className='dashboard-header-div'>
          {
            username ? 
            <>
              <div className='dashboard-username-icon'>
                <p className='dashboard-username-icon-text'>{username[0]}</p>
              </div>
              <h1>{username}'s Dashboard</h1> 
            </>
          :
           <>
           <h1>Dashboard</h1>
          </>

          }
        </div>
        <h2>Saved Full Journals:</h2>
        {
          fullJournals ? fullJournals.map((fullJournal) => {
            const {_id, text} = fullJournal;
            return (
                <div key={_id} className='card'>
                  <textarea onChange={(e) => {
                    e.preventDefault();
                    setNewFullJournalText(e.target.value);
                  }} defaultValue={text}></textarea>
                  <button onClick={(e) => {
                    e.preventDefault();
                    updateFullJournalHelper(token, _id, {text: newFullJournalText});
                  }}>Update Journal</button>
                  <button onClick={(e) => {
                    e.preventDefault();
                    deleteFullJournalHelper(token, _id);
                  }}>Delete Full Journal</button>
                </div>
            )
          }) : 
          <div className='card'>
            <p>No Saved Full Journals</p>
          </div>
        }
        <div className="spacer1"/>
        <h2>Saved Journal Summaries:</h2>
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
                  deleteJournalsHelper(token, _id);
                }}>Delete Journal</button>
              </div>
            )
          }) : 
          <div className='card frosted-more lighting rounded'>
            <p>No Saved Journals</p>
          </div>
        }
        <button style={{color: 'red'}}onClick={handleDeleteUser}>DELETE ACCOUNT</button>
        </>
    )
};

export default Dashboard;