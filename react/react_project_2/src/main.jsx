import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { UserContext } from './utils/userContext.js';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <UserContext.Provider value="Sanjay Samantra">
      <App />
    </UserContext.Provider>
  </BrowserRouter>
  // </StrictMode>,
)
