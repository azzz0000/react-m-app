import React from 'react'


export const AUDIO_CONTEXT = React.createContext({})
const audio = new Audio()

const AudioContext = ({ children }) => {

  const handleAudio = (track) => {
    audio.src = track.src
    audio.play()
  }

  const value = {
    audio,
    handleAudio
  }

  return (
    <AUDIO_CONTEXT.Provider value={value}>
      {children}
    </AUDIO_CONTEXT.Provider>
  )
}

export default AudioContext