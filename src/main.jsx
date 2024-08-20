import { StrictMode } from 'react'
import {HashRoute} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRoute>
    <App />
    </HashRoute>
  </StrictMode>,
)
