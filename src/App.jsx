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

function App () {
  const playSound = (soundId) => {
    const audio = document.getElementById(soundId)
    console.log(audio)
    audio.play()
  }

  return (
    <>
      <div id='drum-machine' className='d-flex justify-content-center align-items-center'>
        <div id='display' className='d-flex'>
          <div id='pad-bank'>
            <button className='drum-pad' id='Heater-1' onClick={() => playSound('Q')}>
              Q
              <audio src={Heater1} className='clip' id='Q' />
            </button>
            <button className='drum-pad' id='Heater-2' onClick={() => playSound('W')}>
              W
              <audio src={Heater2} className='clip' id='W' />
            </button>
            <button className='drum-pad' id='Heater-3' onClick={() => playSound('E')}>
              E
              <audio src={Heater3} className='clip' id='E' />
            </button>
            <button className='drum-pad' id='Heater-4' onClick={() => playSound('A')}>
              A
              <audio src={Heater4} className='clip' id='A' />
            </button>
            <button className='drum-pad' id='Clap' onClick={() => playSound('S')}>
              S
              <audio src={Clap} className='clip' id='S' />
            </button>
            <button className='drum-pad' id='Open-HH' onClick={() => playSound('D')}>
              D
              <audio src={OpenHH} className='clip' id='D' />
            </button>
            <button className='drum-pad' id='Kick-n-Hat' onClick={() => playSound('Z')}>
              Z
              <audio src={KicknHat} className='clip' id='Z' />
            </button>
            <button className='drum-pad' id='Kick' onClick={() => playSound('X')}>
              X
              <audio src={Kick} className='clip' id='X' />
            </button>
            <button className='drum-pad' id='Closed-HH' onClick={() => playSound('C')}>
              C
              <audio src={ClosedHH} className='clip' id='C' />
            </button>
          </div>
          <div id='controls'>
            controls
          </div>
        </div>
      </div>
    </>
  )
}

export default App
