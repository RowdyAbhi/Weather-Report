import InfoBox from "./Infobox"
import Searchbox from "./Searchbox"
import { useState } from 'react'

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25,
        tempMin: 25,
        tempMax: 25,
        humidity: 47,
        feels_like: 34,
        description: "Haze",
    })

    let updateWeather=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{color: "black" ,textAlign:"center", alignContent:"center"}}>
            <h1 style={{fontFamily:"cursive",fontSize:"3.2rem",textShadow:"3px 3px 7px black"}}> Weather Report</h1>
            <Searchbox update={updateWeather}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
};