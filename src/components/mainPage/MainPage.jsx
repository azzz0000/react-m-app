
import { Input } from '@mui/material'
import './mainPage.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Tracks from '../tracks/Tracks'

const runSearch = (text, tracks) => {
  if (text.trim().length === 0) return tracks;

  const foundTracks = tracks.filter(({ title, artists }) => {
    return title.includes(text) || artists.includes(text)
  })

  return foundTracks
}

const MainPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getMusic = async () => {
      const response = await axios.get('/data.json')
      console.log(response.data);
      setData(response.data)
    }
    getMusic()

  }, [])

  if (data.length === 0) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='search'>
      <Input className='input' placeholder='Поиск треков' />
      <div className='list'>
        {runSearch("", data).map(mp3 => <Tracks key={mp3.id} {...mp3} />)}
      </div>
    </div>
  )
}

export default MainPage