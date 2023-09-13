/* eslint-disable react/prop-types */

import { Box } from "@mui/material"
import { DailyWeather } from "./DailyWeather"


export const Card = ({ climate, img, climatePerHour }) => {
    if(climate.message) return (<h3>La ciudad ingresada no exite</h3>) 
    if(climatePerHour.message) return

    const iconURL = `https://openweathermap.org/img/wn/${climate.weather[0].icon}@2x.png`

    return(
        <Box sx={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})`,
            backgroundSize: 'cover',
            width:{xs: '100%',sm:'500px', md: '800px'},
            height:{xs:'500px',sm:'500px', md:'800px'},
            position:'relative'
           
        }}>
            <h1 style={{padding:'15px', marginBottom:'5px'}}>{climate.name} <span style={{fontSize:'25px'}}>{climate.sys.country}</span></h1>
            <div style={{display:"flex", gap:'0px', justifyContent:'center', alignItems: 'center'}}>
                <h1>{`${Math.round(climate.main.temp)}°C`} </h1> 
                <img src={iconURL} alt="" />                
            </div>    
            

            <div style={{display:"flex", gap:'15px', justifyContent:'center'}}>
                <h2>{`Máx: ${Math.round(climate.main.temp_max)}°C`} </h2>
                <h2>{`Min: ${Math.round(climate.main.temp_min)}°C`}</h2>
            </div>
            
            <h3 style={{margin:0, color:'#ddd', fontWeight: '400'}}>{`Humidity: ${climate.main.humidity}%`}</h3>
            <h3 style={{margin:0, color:'#ddd', fontWeight: '400'}}>{`Wind: ${Math.round(climate.wind.speed * 3.6)}km/h`}</h3>  

            <Box style={{
                position:'absolute', 
                bottom:0, left:'50%', 
                transform: 'translate(-50%,0)',
                display:'flex', gap:'55px', 
                justifyContent:'center', 
                alignItems:'center'
            }}>
                <DailyWeather day={climatePerHour.list[0]} midDay={climatePerHour.list[3]} />
                <DailyWeather day={climatePerHour.list[8]} midDay={climatePerHour.list[11]} />
                <Box sx={{display: {xs:'none',sm:'block', md:'block'}}}>
                    <DailyWeather day={climatePerHour.list[16]} midDay={climatePerHour.list[19]} />
                </Box>
                <Box sx={{display: {xs:'none', md:'block'}}}>
                    <DailyWeather day={climatePerHour.list[24]} midDay={climatePerHour.list[27]}/>
                </Box>

            </Box>

            
            

            

        </Box>
    )

}