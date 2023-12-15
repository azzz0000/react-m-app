import React from 'react'
export const AUDIO_CONTEXT = React.createContext({})
const audio = new Audio()

const AudioContext = ({ children }) => {
  const [currentTrack, setCurrentTrack] = React.useState(null)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const handleAudio = (track) => {
    if (currentTrack?.id !== track.id){
      setCurrentTrack(track)
      setIsPlaying(true)
      audio.src = track.src
      audio.play()
      audio.play()
      return
    }
    if (isPlaying){
      audio.pause()
      setIsPlaying(false)
    }
    else{
      audio.play()
      setIsPlaying(true)
    }
  } 

  const value = {
    isPlaying,
    currentTrack,
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