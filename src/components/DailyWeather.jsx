/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

export const DailyWeather = ({day, midDay}) => {

    const getdayOfWeek = (day) => {
        let result
            switch (day) {

                case 0:
                    result = "Sun"
                    break;
                case 1:
                    result = "Mon";
                    break;
                case 2:
                    result = "Tue";
                    break;
                 case 3:
                    result = "Wed";
                    break;
                 case 4:
                    result = "Thu";
                    break;
                 case 5:
                    result = "Fri";
                    break;
                case 6:
                    result = "Sat";
                    break;

                default: 
                  result = "";
                  break;
            
              }
              return result
        
    }
    return(
        <Box
                sx={{
                    height:{xs:'150px', md:'200px'},
                    width:{xs:'100px', md:'115px'},
                    backgroundImage:`linear-gradient(to right, rgba(100,100,100,0.3), rgba(100,100,100,0.3))`,
                    borderRadius:'10px',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    marginBottom:{xs:'5px',md:'25px'}

                }}
            >
                <h2 style={{margin:0}}>{getdayOfWeek(new Date(day.dt_txt).getDay())}</h2>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    {/* <h2 style={{margin:0}}>{Math.round(day.main.temp)}</h2> */}
                    <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} width={70} height={70} alt="" />
                </div>

                <div style={{ display:'flex', gap:'15px', justifyContent:'center', alignItems:'center'}}>
                    <h2 style={{margin:0}}>{`${Math.round(midDay.main.temp_max)}°`}</h2>
                    <h2 style={{margin:0, color:'#aaa'}}>{`${Math.round(day.main.temp_min)}°`}</h2>
                </div>
            </Box>
    )

}