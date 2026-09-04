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
      <div className="transport-buttons">
        <button 
          className="btn btn-play"
          onClick={togglePlay}
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
        
        <button 
          className="btn btn-stop"
          onClick={stop}
        >
          ⏹ Stop
        </button>
      </div>

      <div className="transport-tempo">
        <label>Tempo (BPM)</label>
        <div className="tempo-control">
          <input
            type="range"
            min="40"
            max="200"
            value={tempo}
            onChange={(e) => setTempo(Number(e.target.value))}
            className="tempo-slider"
          />
          <span className="tempo-display">{tempo}</span>
        </div>
      </div>
    </div>
  )
}