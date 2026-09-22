import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { UserContext } from './utils/userContext.js';
import { ThemeProvider } from './utils/themeContext.jsx';
import { Provider } from 'react-redux';
import { myStore } from './store/store.js';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <UserContext.Provider value="Sanjay Samantra">
      <ThemeProvider>
        <Provider store={myStore}>
          <App />
        </Provider>
      </ThemeProvider>
    </UserContext.Provider>
  </BrowserRouter>
  // </StrictMode>,
)
