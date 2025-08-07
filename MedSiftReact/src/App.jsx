//APP.jsx is basically a component "wrapper" for all of our other components. 
//It's where we link them all together and export to be rendered by main.jsx. 
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import { Journals, JournalSummaries, Home, Notes, Dashboard, About, Register, Login, Logout} from "./pages";
import { Navigation } from "./components"



function App() {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  console.log("App userId: ", userId);
 
  async function grabUserIdFromStorage() {
    if(!userId){
      setUserId( window.localStorage.getItem('userId'));
    }
  }

  useEffect(() => {
    grabUserIdFromStorage();
  }, []);
  
  return (
    <> 
    <Navigation navigate={navigate} userId={userId}/>
    <div className='main-content'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard userId={userId} setUserId={setUserId} navigate={navigate} setUsername={setUsername}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home navigate={navigate} username={username}/>} />
        <Route path="/journals" element={<Journals navigate={navigate} userId={userId}/>} />
        <Route path="/journals_summaries" element={<JournalSummaries navigate={navigate} userId={userId}/>} /> 
        <Route path="/notes" element={<Notes navigate={navigate} userId={userId}/>} />
        <Route path="/register" element={<Register navigate={navigate} setUserId={setUserId} setUsername={setUsername}/>} />
        <Route path="/login" element={<Login navigate={navigate} setUserId={setUserId} />} />
        <Route path="/logout" element={<Logout navigate={navigate} setUserId={setUserId} />} />
        </Routes> 
    </div>
    </>
  )
}

export default App
