import React from 'react'
import Transport from './components/Transport'
import Mixer from './components/Mixer'
import Piano from './components/Piano'
import Playlist from './components/Playlist'
import './styles/app.css'

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <h1>idk DAW</h1>
        </div>
        <div className="header-center">
          <Transport />
        </div>
        <div className="header-right">
          <span className="version">v0.1.0</span>
        </div>
      </header>
      
      <div className="workspace">
        <div className="left-panel">
          <Mixer />
        </div>
        
        <div className="center-panel">
          <Piano />
          <Playlist />
        </div>
      </div>
    </div>
  )
}
