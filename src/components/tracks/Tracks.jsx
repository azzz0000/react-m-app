


import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import './tracks.css'
import { useContext } from 'react'
import { AUDIO_CONTEXT } from '../../context/AudioContext'

const Tracks = (track) => {
  const { id, preview, title, artists, duration } = track
  const { handleAudio } = useContext(AUDIO_CONTEXT)


  return (
    <div className='track'>
      <IconButton onClick={() => handleAudio(track)}>
        {!true ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img className='preview' src={preview} alt="image" />
      <div className='info'>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p> 04 :  04 </p>
    </div>
  )
}

export default Tracks