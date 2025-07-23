import { Route, Routes, useNavigate } from 'react-router'
import { Container } from 'react-bootstrap';
import './App.css'
import { Journals, Home, Notes} from "./pages";
import { Navigation } from "./components"

function App() {
  const navigate = useNavigate();

  return (
    <> 
    <div className='main-content'>
      <Navigation navigate={navigate}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Journals" element={<Journals />} />
        <Route path="/Notes" element={<Notes />} />
      </Routes> 
    </div>
    </>
  )
}

export default App
