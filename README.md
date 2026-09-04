# idk DAW

A simple, beginner-friendly Digital Audio Workstation for making music in your browser.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Then open your browser to `http://localhost:5173`

### 3. Start Making Music!

- **Transport** (top): Play/Stop and adjust tempo (BPM)
- **Sequencer** (middle): Click notes to add them to tracks
- **Mixer** (bottom): Adjust volume for each track

## How to Use

1. Click the **Play** button to start
2. Click note buttons in the **Sequencer** to add them to each track (Drums, Bass, Melody)
3. Use the **Mixer** to adjust volumes
4. Adjust the **Tempo** to change speed

## Project Structure

```
src/
├── components/          # UI components
│   ├── Transport.jsx   # Play/Stop/Tempo controls
│   ├── Sequencer.jsx   # Note grid for composing
│   └── Mixer.jsx       # Volume controls
├── store/
│   └── audioStore.js   # Audio engine & state
└── styles/             # Component styles
```

## Tech Stack

- **React** — UI framework
- **Tone.js** — Web audio synthesis
- **Zustand** — State management
- **Vite** — Build tool

## What's Next?

Once you're comfortable with this, you can add:
- Recording functionality
- More effects (reverb, delay, EQ)
- Piano roll visualization
- File save/load
- Sample playback

## Troubleshooting

**"No sound"** — Click the Play button and wait a moment. Some browsers require user interaction before playing audio.

**"Browser freezes"** — Refresh the page. Sometimes there are too many scheduled notes.

## Need Help?

Edit files in `src/` and save. The browser will automatically reload (hot reload).

Good luck making music! 🎵