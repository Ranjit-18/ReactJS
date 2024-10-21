import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import First from './components/First.jsx'
import Comp3 from './components/Comp3.jsx'
createRoot(document.getElementById('root')).render(
  //<First></First> 
  <Comp3></Comp3>
)
