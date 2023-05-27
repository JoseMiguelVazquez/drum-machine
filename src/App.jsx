import { useEffect } from 'react'
import './App.css'
import Heater1 from './audio/Heater-1.mp3'
import Heater2 from './audio/Heater-2.mp3'
import Heater3 from './audio/Heater-3.mp3'
import Heater4 from './audio/Heater-4.mp3'
import Clap from './audio/Clap.mp3'
import OpenHH from './audio/Open-HH.mp3'
import KicknHat from './audio/Kick-n-Hat.mp3'
import Kick from './audio/Kick.mp3'
import ClosedHH from './audio/Closed-HH.mp3'
import DrumPad from './components/DrumPad'

function App () {
  const padBankInfo = [
    { btnId: 'Heater-1', keyboardKey: 'Q', soundSource: Heater1 },
    { btnId: 'Heater-2', keyboardKey: 'W', soundSource: Heater2 },
    { btnId: 'Heater-3', keyboardKey: 'E', soundSource: Heater3 },
    { btnId: 'Heater-4', keyboardKey: 'A', soundSource: Heater4 },
    { btnId: 'Clap', keyboardKey: 'S', soundSource: Clap },
    { btnId: 'Open-HH', keyboardKey: 'D', soundSource: OpenHH },
    { btnId: 'Kick-n-Hat', keyboardKey: 'Z', soundSource: KicknHat },
    { btnId: 'Kick', keyboardKey: 'X', soundSource: Kick },
    { btnId: 'Closed-HH', keyboardKey: 'C', soundSource: ClosedHH }
  ]

  const playSound = (soundId) => {
    const audio = document.getElementById(soundId)
    if (audio !== null) {
      audio.play()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', (e) => playSound(e.key.toUpperCase()))
  }, [])

  return (
    <>
      <div id='drum-machine' className='d-flex justify-content-center align-items-center h-100'>
        <div className='d-flex'>
          <div id='pad-bank'>
            {padBankInfo.map(drumPad => (
              <DrumPad
                key={drumPad.keyboardKey}
                btnId={drumPad.btnId}
                keyboardKey={drumPad.keyboardKey}
                soundSource={drumPad.soundSource}
                handlePlaySound={playSound}
              />
            ))}
          </div>
          <div id='controls'>
            <p id='display'> </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
