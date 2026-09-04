import React from 'react'
import { useAudioStore } from '../store/audioStore'
import '../styles/playlist.css'

export default function Playlist() {
  const tracks = useAudioStore(state => state.tracks)

  return (
    <div className="playlist">
      <div className="playlist-header">
        <h3>Playlist</h3>
        <div className="timeline-info">
          <span>Bar 1 | Beat 1</span>
        </div>
      </div>

      <div className="playlist-container">
        <div className="timeline">
          <div className="timeline-numbers">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={i} className="timeline-step">
                {i + 1}
              </div>
            ))}
          </div>

          <div className="playlist-tracks">
            {tracks.map((track) => (
              <div key={track.id} className="playlist-track">
                <div className="track-name-small">{track.name}</div>
                <div className="pattern-grid">
                  {Array.from({ length: 16 }, (_, i) => (
                    <div key={i} className="pattern-cell">
                      {track.notes.length > 0 && (
                        <div className="note-indicator" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
