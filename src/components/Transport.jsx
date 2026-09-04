import React from 'react'
import { useAudioStore } from '../store/audioStore'
import '../styles/transport.css'

export default function Transport() {
  const isPlaying = useAudioStore(state => state.isPlaying)
  const tempo = useAudioStore(state => state.tempo)
  const togglePlay = useAudioStore(state => state.togglePlay)
  const stop = useAudioStore(state => state.stop)
  const setTempo = useAudioStore(state => state.setTempo)

  return (
    <div className="transport">
      <button 
        className={`transport-btn play-btn ${isPlaying ? 'active' : ''}`}
        onClick={togglePlay}
        title="Play / Pause"
      >
        <span>{isPlaying ? '⏸' : '▶'}</span>
      </button>
      
      <button 
        className="transport-btn stop-btn"
        onClick={stop}
        title="Stop"
      >
        <span>⏹</span>
      </button>

      <div className="tempo-display">
        <label>BPM</label>
        <input
          type="number"
          min="40"
          max="200"
          value={tempo}
          onChange={(e) => setTempo(Number(e.target.value))}
          className="tempo-input"
        />
      </div>
    </div>
  )
}
