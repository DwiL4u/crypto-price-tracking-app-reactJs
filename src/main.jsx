import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CoinProvider  from './context/CoinContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CoinProvider>
        <App />
      </CoinProvider>
    </BrowserRouter>
  </StrictMode>,
)
