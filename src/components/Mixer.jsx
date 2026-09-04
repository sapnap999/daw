import React from 'react'
import { useAudioStore } from '../store/audioStore'
import '../styles/mixer.css'

export default function Mixer() {
  const tracks = useAudioStore(state => state.tracks)
  const setTrackVolume = useAudioStore(state => state.setTrackVolume)
  const clearTrack = useAudioStore(state => state.clearTrack)

  return (
    <div className="mixer">
      <div className="mixer-title">Mixer</div>
      
      <div className="mixer-tracks">
        {tracks.map((track, idx) => (
          <div key={track.id} className="mixer-track">
            <div className="track-header">
              <span className="track-num">#{idx + 1}</span>
              <span className="track-name">{track.name}</span>
            </div>
            
            <div className="fader-container">
              <input
                type="range"
                min="-24"
                max="6"
                value={track.volume}
                onChange={(e) => setTrackVolume(track.id, Number(e.target.value))}
                className="vertical-fader"
              />
            </div>

            <div className="track-controls">
              <div className="volume-label">{track.volume}dB</div>
              <button
                className="btn-small btn-mute"
                title="Mute"
              >
                M
              </button>
            </div>

            <button
              className="btn-clear-track"
              onClick={() => clearTrack(track.id)}
              title="Clear track"
            >
              Clear
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
