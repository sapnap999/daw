import React from 'react'
import { useAudioStore } from '../store/audioStore'
import '../styles/piano.css'

export default function Piano() {
  const tracks = useAudioStore(state => state.tracks)
  const addNote = useAudioStore(state => state.addNote)

  const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
  const noteNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']

  const handleNoteClick = (trackId, pitch) => {
    addNote(trackId, {
      pitch,
      duration: '8n',
      time: `0:${Math.floor(Math.random() * 4)}`,
    })
  }

  return (
    <div className="piano-section">
      <div className="piano-header">
        <h3>Piano Roll</h3>
      </div>

      <div className="piano-container">
        <div className="piano-keys">
          {notes.map((note, idx) => (
            <div key={note} className="piano-key-row">
              <div className="key-label">{noteNames[idx]}</div>
            </div>
          ))}
        </div>

        <div className="piano-tracks">
          {tracks.map((track, trackIdx) => (
            <div key={track.id} className="piano-track">
              <div className="track-header-small">{track.name}</div>
              <div className="notes-container">
                {notes.map(note => (
                  <button
                    key={`${track.id}-${note}`}
                    className="piano-note"
                    onClick={() => handleNoteClick(track.id, note)}
                    title={`${track.name} - ${note}`}
                  >
                    +
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
