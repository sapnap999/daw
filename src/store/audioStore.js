import { create } from 'zustand'
import * as Tone from 'tone'

export const useAudioStore = create((set, get) => ({
  isPlaying: false,
  tempo: 120,
  currentTime: 0,

  tracks: [
    { id: 1, name: 'Drums', volume: -6, notes: [] },
    { id: 2, name: 'Bass', volume: -6, notes: [] },
    { id: 3, name: 'Melody', volume: -6, notes: [] },
  ],

  synths: {},
  masterGain: null,

  initAudio: async () => {
    await Tone.start()
    
    const state = get()
    const masterGain = new Tone.Gain(-6).toDestination()
    
    const synths = {}
    state.tracks.forEach(track => {
      synths[track.id] = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'square' },
        envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 0.5 },
      }).connect(masterGain)
    })

    set({ synths, masterGain })
    Tone.Transport.bpm.value = state.tempo
  },

  togglePlay: async () => {
    const state = get()
    if (!state.masterGain) {
      await state.initAudio()
    }

    if (Tone.Transport.state === 'started') {
      Tone.Transport.pause()
      set({ isPlaying: false })
    } else {
      Tone.Transport.start()
      set({ isPlaying: true })
      state.scheduleNotes()
    }
  },

  stop: () => {
    Tone.Transport.stop()
    Tone.Transport.position = 0
    set({ isPlaying: false, currentTime: 0 })
  },

  scheduleNotes: () => {
    const state = get()
    
    state.tracks.forEach(track => {
      const synth = state.synths[track.id]
      
      track.notes.forEach(note => {
        Tone.Transport.schedule(() => {
          synth.triggerAttackRelease(note.pitch, note.duration)
        }, note.time)
      })
    })
  },

  addNote: (trackId, note) => {
    set(state => ({
      tracks: state.tracks.map(track =>
        track.id === trackId
          ? { ...track, notes: [...track.notes, note] }
          : track
      ),
    }))
  },

  clearTrack: (trackId) => {
    set(state => ({
      tracks: state.tracks.map(track =>
        track.id === trackId
          ? { ...track, notes: [] }
          : track
      ),
    }))
  },

  setTrackVolume: (trackId, volume) => {
    set(state => ({
      tracks: state.tracks.map(track =>
        track.id === trackId
          ? { ...track, volume }
          : track
      ),
    }))

    const state = get()
    const synth = state.synths[trackId]
    if (synth) {
      synth.volume.value = volume
    }
  },

  setTempo: (tempo) => {
    set({ tempo })
    Tone.Transport.bpm.value = tempo
  },
}))