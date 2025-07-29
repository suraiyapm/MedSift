//APP.jsx is basically a component "wrapper" for all of our other components. 
//It's where we link them all together and export to be rendered by main.jsx. 
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import { Journals, Home, Notes, Dashboard, About, Register, Login} from "./pages";
import { Navigation } from "./components"

function App() {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate(); 

  return (
    <> 
    <div className='main-content'>
      <Navigation navigate={navigate}/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home navigate={navigate}/>} />
        <Route path="/journals" element={<Journals navigate={navigate}/>} />
        <Route path="/notes" element={<Notes navigate={navigate} userId={userId}/>} />
        <Route path="/register" element={<Register navigate={navigate} setUserId={setUserId} />} />
        <Route path="/login" element={<Login navigate={navigate} setUserId={setUserId} />} />
        
      </Routes> 
    </div>
    </>
  )
}

export default App
