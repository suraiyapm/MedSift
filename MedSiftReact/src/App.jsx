//APP.jsx is basically a component "wrapper" for all of our other components. 
//It's where we link them all together and export to be rendered by main.jsx. 
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import { Journals, JournalSummaries, Home, Notes, Dashboard, About, Register, Login, Logout} from "./pages";
import { Navigation } from "./components"



function App() {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
 
  async function grabUserIdFromStorage() {
    if(!userId){
      setUserId( window.localStorage.getItem('userId'));
    }
  }

  async function persistToken() {
    const storedToken = window.localStorage.getItem('token');
    if(storedToken){
      setToken(storedToken);
    }
  }

  useEffect(() => {
    grabUserIdFromStorage();
    persistToken();
  }, [token]);
  
  return (
    <> 
    <Navigation navigate={navigate} userId={userId}/>
    <div className='main-content'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard userId={userId} setUserId={setUserId} token={token} navigate={navigate} setUsername={setUsername}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home navigate={navigate} username={username}/>} />
        <Route path="/journals" element={<Journals navigate={navigate} userId={userId} token={token}/>} />
        <Route path="/journals_summaries" element={<JournalSummaries navigate={navigate} token={token} userId={userId}/>} /> 
        <Route path="/notes" element={<Notes navigate={navigate} userId={userId} token={token}/> } />
        <Route path="/register" element={<Register navigate={navigate} setUserId={setUserId} setUsername={setUsername}/>} />
        <Route path="/login" element={<Login navigate={navigate} setUserId={setUserId} setToken={setToken}/>} />
        <Route path="/logout" element={<Logout navigate={navigate} setUserId={setUserId} token={token} />} />
        </Routes> 
    </div>
    </>
  )
}

export default App
