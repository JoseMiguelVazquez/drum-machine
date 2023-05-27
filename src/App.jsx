import { useEffect, useState } from 'react'
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
  const [currentSound, setCurrentSound] = useState('')

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

  const playSound = (soundKey) => {
    const audio = document.getElementById(soundKey)
    if (audio !== null) {
      let soundName = ''
      switch (soundKey) {
        case 'Q':
          soundName = 'Heater-1'
          break
        case 'W':
          soundName = 'Heater-2'
          break
        case 'E':
          soundName = 'Heater-3'
          break
        case 'A':
          soundName = 'Heater-4'
          break
        case 'S':
          soundName = 'Clap'
          break
        case 'D':
          soundName = 'Open-HH'
          break
        case 'Z':
          soundName = 'Kick-n-Hat'
          break
        case 'X':
          soundName = 'Kick'
          break
        case 'C':
          soundName = 'Closed-HH'
          break
      }
      setCurrentSound(soundName)
      audio.play()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', (e) => playSound(e.key.toUpperCase()))
  }, [])

  return (
    <>
      <div id='drum-machine' className='d-flex flex-column justify-content-center align-items-center h-100 w-100'>
        <h1 className='general-title'>Drum Machine</h1>
        <div id='drum-machine-container' className='d-flex rounded shadow'>
          <div id='pad-bank' className='d-flex flex-wrap justify-content-center align-items-center gap-2 py-4'>
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
          <div id='controls' className='d-flex flex-column align-items-center justify-content-center py-4'>
            <div className='form-check form-switch d-flex flex-column align-items-center p-0 mb-3'>
              <label className='form-check-label p-0 m-0' htmlFor='flexSwitchCheckChecked'>Power</label>
              <input className='form-check-input p-0 m-0' type='checkbox' role='switch' id='flexSwitchCheckChecked' defaultChecked />
            </div>
            <p id='display' className='d-flex align-items-center justify-content-center m-0 rounded'>{currentSound}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
