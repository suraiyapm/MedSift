import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router'
import './main.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
