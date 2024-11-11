import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Search from './components/Search.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
