//APP.jsx is basically a component "wrapper" for all of our other components. 
//It's where we link them all together and export to be rendered by main.jsx. 

import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import { Journals, Home, Notes, Dashboard, About} from "./pages";
import { Navigation } from "./components"

function App() {
  const navigate = useNavigate(); 

  return (
    <> 
    <div className='main-content'>
      <Navigation navigate={navigate}/>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home navigate={navigate}/>} />
        <Route path="/Journals" element={<Journals navigate={navigate}/>} />
        <Route path="/Notes" element={<Notes navigate={navigate}/>} />
      </Routes> 
    </div>
    </>
  )
}

export default App
