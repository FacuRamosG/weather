
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import { Card } from './components/Card'
import { createClient } from 'pexels';
import { TextField, Typography } from '@mui/material';

const client = createClient(process.env.API_KEY_IMAGE)
let timer
const timeout = 500

function App() {
  const [search, setSearch] = useState('')
  const [climate, setClimate] = useState(null)
  const [climatePerHour, setClimatePerHour] = useState(null)
  const [img, setImg] = useState('')

  useEffect(() => {
    if(search === '') return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.API_KEY_WEATHER}&units=metric`)
      .then(response => response.json())
      .then(data => setClimate(data))
      .catch (error => console.log(error)) 

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${process.env.API_KEY_WEATHER}&units=metric`)
      .then(response => response.json())
      .then(data => setClimatePerHour(data))
      .catch (error => console.log(error)) 
    
    const query = search
    client.photos.search({ query, per_page: 1 })
    .then(photos => setImg(photos.photos[0].src.large2x))
    .catch(error => console.error(error))

  },[search])

  const handleSearch = (e) => {
    const newQuery = e.target.value
    clearTimeout(timer)

    timer = setTimeout(() => {
      setSearch(newQuery)
    }, timeout)
    
  }

  const handleSubmmit = (e) => {
    e.preventDefault()
  }

  return (
    <div >
      <Typography sx={{
        fontSize:{xs:'25px', md:'30px'},
        marginBottom:'25px'
      }}  >Search the weather in your city!</Typography>
      <form action="" onSubmit={handleSubmmit} style={{height:'35px', marginX:'auto', boxSizing:'border-box', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <TextField
              color='info'
              placeholder= 'New York, Barcelona, Berlín, ...'
              sx={{ width: '100%', input:{color:'white'}, label:{color:'white'} }}
              autoFocus
              onChange={handleSearch}
              label='City'

      />
      </form>
      {
        climate && climatePerHour  ? <Card climate={climate} img={img} climatePerHour={climatePerHour}  /> : null
      }
    </div>
  )
}

export default App
