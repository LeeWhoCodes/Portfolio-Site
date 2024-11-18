import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './Hero.jsx'
import VSWindow from './VSWindow.jsx'
import WordWindow from './WordWindow.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <VSWindow />
    <WordWindow />
    <App />
    <App />
    <App />
    <App />
  </StrictMode>,
)
