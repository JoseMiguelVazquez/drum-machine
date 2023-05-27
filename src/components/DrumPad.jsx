/* eslint-disable react/prop-types */
import React from 'react'

const DrumPad = ({ btnId, keyboardKey, soundSource, handlePlaySound }) => {
  return (
    <button className='drum-pad' id={btnId} onClick={() => handlePlaySound(keyboardKey)}>
      {keyboardKey}
      <audio src={soundSource} className='clip' id={keyboardKey} />
    </button>
  )
}

export default DrumPad
