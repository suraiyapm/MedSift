import medSiftLogo from '/MedSiftLogo.png';
import { deleteUser } from '../api';

function Dashboard({userId, navigate}) {

  const handleDeleteUser = async (event) => {
    event.preventDefault();
    const result = await deleteUser(userId);
    if(!result.message){
      window.localStorage.removeItem('userId');
      navigate("/register");
    } else {
      alert(`${result.message}`);
    }
  }

    return (
        <>
      <div className='main-content'> 
        <a href="https://github.com/mrDNA219/3140_Project" target="_blank">
          <img src={medSiftLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Dashboard</h1>
        <div className="card">
          <p>Placeholder for dashboard area: My Notes, Annotations, Followed Topics/Journals/Ongoing, Bookmarks</p>
        </div>
        <button onClick={handleDeleteUser}>DELETE ACCOUNT</button>
      </div>
        </>
    )
}

export default Dashboard;