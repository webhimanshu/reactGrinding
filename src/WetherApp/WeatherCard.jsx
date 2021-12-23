import React,{useState,useEffect} from 'react'
import './style.css';
const WeatherCard = ({weather}) =>
 {
     const [weatherstate,setweatherstate] = useState("");
     useEffect(() => {
         if(weather.mood)
         {
          switch(weather.mood)
          {
      case "Clouds":
          setweatherstate("wi-day-cloudy");
          break;
       case "Haze":
           setweatherstate("wi-fog");  
           break;
       case "Clear":
           setweatherstate("wi-day-sunny");    
           break; 
       case "Mist":
           setweatherstate("wi-day-fog");
           break;
        default :
        setweatherstate("wi-day-sunny");      
        break;
          }
         }
     }, [weather.mood])
const sec=weather.sunset;
const date=new Date(sec*1000);
const time=`${date.getHours()}:${date.getMinutes()}`
    return (
       <>
            <div className="card">
              <div className="weather-icon">
                  <i className={` wi ${weatherstate}`}></i>
              </div>
              <div className="weather-data">
                  <div className="weather-city-data">
              <span>{weather.temp}&deg;</span>
                                </div>
                                <div className="description">
                  <div className="condition">{weather.mood}</div>
                  <div className="place">{weather.name},{weather.country}</div>
              </div>

                  <div className="weather-timezone">
                    {new Date().toLocaleString()}
                  </div>
                  
              </div>
              <div className="weather-extra-data">
              <div className="extra-data border-cut-left">
              <div className="inner-data-1">  <i className={"wi wi-sunset"}></i>
              </div>
              <div className="inner-data-2"> <p>{time} Sunset </p></div>
              </div>
              <div className="extra-data">
              <div className="inner-data-1">  <i className={"wi wi-humidity"}></i>
              </div>
              <div className="inner-data-2"> <p>{weather.humidity}<br></br> Humidity </p></div>
               
               </div>
              <div className="extra-data">
              <div className="inner-data-1">  <i className={"wi wi-rain"}></i>
              </div>
              <div className="inner-data-2"> <p>{weather.pressure}<br></br> pressure</p></div>              </div>
              <div className="extra-data border-cut-right">
              <div className="inner-data-1">  <i className={"wi wi-strong-wind"}></i>
              </div>
              <div className="inner-data-2"> <p>{weather.speed} <br></br>  Speed </p></div>
              </div>
              </div>
             </div>
       </>
    )
}

export default WeatherCard
