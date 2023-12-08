import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AudioContext from './context/AudioContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AudioContext>
      <App />
    </AudioContext>
  </React.StrictMode>,
)
