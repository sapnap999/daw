import React from 'react'
import { useAudioStore } from '../store/audioStore'
import '../styles/mixer.css'

export default function Mixer() {
  const tracks = useAudioStore(state => state.tracks)
  const setTrackVolume = useAudioStore(state => state.setTrackVolume)

  return (
    <div className="mixer">
      <div className="mixer-header">
        <h3>Mixer</h3>
        <p className="hint">Adjust track volumes</p>
      </div>

      <div className="mixer-channels">
        {tracks.map(track => (
          <div key={track.id} className="mixer-channel">
            <div className="channel-name">{track.name}</div>
            
            <div className="channel-fader">
              <input
                type="range"
                min="-24"
                max="6"
                value={track.volume}
                onChange={(e) => setTrackVolume(track.id, Number(e.target.value))}
                className="fader"
                orient="vertical"
              />
            </div>

            <div className="channel-volume-display">
              {track.volume} dB
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}