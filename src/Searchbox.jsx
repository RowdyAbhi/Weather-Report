import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css'
import { useState } from 'react';

export default function Searchbox({update}) {

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

// Personal Information is deleted.

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feels_like:jsonResponse.main.feels_like,
                description:jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(error){
            throw error;
        }
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            update(newInfo);
            setError(false);
        }
        catch(error){
            setError(true);
        }
  
    }

    return (
        <div className="Searchbox" >
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city} className='input'/> <br /><br />
                <Button variant="contained" type="submit" style={{color:"White"}}> <b>Search</b></Button>
                {error && <p style={{color:"Red"}}>No Such Place Exist in our Database</p>}
            </form>
        </div>
    )
}
