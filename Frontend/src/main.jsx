import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContexts from './contexts/UserContexts.jsx'
import CaptainContexts from './contexts/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContexts>
      <CaptainContexts>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainContexts>
    </UserContexts>
  </StrictMode>,
)
