import React from 'react'
import Transport from './components/Transport'
import Mixer from './components/Mixer'
import Sequencer from './components/Sequencer'
import './styles/app.css'

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>idk DAW</h1>
        <p>Simple music production</p>
      </header>
      
      <div className="app-content">
        <Transport />
        <Sequencer />
        <Mixer />
      </div>
    </div>
  )
}