// c9fd714bed8287e44016123786f88953
// api.openweathermap.org/data/2.5/weather?q=bhopal&appid=c9fd714bed8287e44016123786f88953
import React ,{useState,useEffect}from 'react'
import './style.css';
import WeatherCard from './WeatherCard';
const Weather = () =>
{
    const [input, setinput] = useState("london");
    const [weather,setweather]=useState({});

    const getWeatherInfo= async ()=>
    {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=c9fd714bed8287e44016123786f88953`;
      try{
        const res=await fetch(url);
        const data=await res.json();
        const {temp,humidity,pressure}=data.main;
         const {main:mood}=data.weather[0];
         const {name}=data;
         const {speed}=data.wind;
         const {country,sunset,sunrise}=data.sys;  
         const myobj=
         {
            
            humidity,
            pressure,
            mood,
            name,
            speed,
            country,
            sunset,
            sunrise,
            temp,
         }
         setweather(myobj)
         

      }
      catch(err){console.log(err)   }
       
};
    useEffect(() => {
        
        
        getWeatherInfo();
        
    }, [])

    return (
        <div className="container-wrap">
             <div className="search">
                 <input type="search" placeholder="search here..." autoFocus className="search-item" value={input} onChange={(e)=>setinput(e.target.value.toLowerCase())}/>
                 <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
             </div>
            <WeatherCard weather={weather}/>
        </div>
    )
}

export default Weather
