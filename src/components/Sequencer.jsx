import React from 'react'
import { useAudioStore } from '../store/audioStore'
import '../styles/sequencer.css'

export default function Sequencer() {
  const tracks = useAudioStore(state => state.tracks)
  const addNote = useAudioStore(state => state.addNote)
  const clearTrack = useAudioStore(state => state.clearTrack)

  const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']

  const handleNoteClick = (trackId, pitch) => {
    addNote(trackId, {
      pitch,
      duration: '8n',
      time: `0:${Math.floor(Math.random() * 4)}`,
    })
  }

  return (
    <div className="sequencer">
      <div className="sequencer-header">
        <h3>Sequencer</h3>
        <p className="hint">Click notes to add them to each track</p>
      </div>

      <div className="sequencer-grid">
        {tracks.map(track => (
          <div key={track.id} className="track-row">
            <div className="track-label">
              <span className="track-name">{track.name}</span>
              <button
                className="btn btn-small btn-clear"
                onClick={() => clearTrack(track.id)}
              >
                Clear
              </button>
            </div>

            <div className="notes-grid">
              {notes.map(note => (
                <button
                  key={`${track.id}-${note}`}
                  className="note-button"
                  onClick={() => handleNoteClick(track.id, note)}
                  title={`${track.name} - ${note}`}
                >
                  {note}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sequencer-info">
        <p>💡 Tip: Start with the Drums track and add a simple beat, then add Bass and Melody</p>
      </div>
    </div>
  )
}