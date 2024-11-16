import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './Hero.jsx'
import Window from './Window.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Window />
    <App />
    <App />
    <App />
    <App />
  </StrictMode>,
)
