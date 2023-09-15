import React, { useState } from 'react';
import './WeatherApp.css';
import searchicon from "../Assets/search.png";
import clearicon from "../Assets/clear.png";
import cloudicon from "../Assets/cloud.png";
import drizzleicon from "../Assets/drizzle.png";
import rainicon from "../Assets/rain.png";
import snowicon from "../Assets/snow.png";
import windicon from "../Assets/wind.png";
import humidityicon from "../Assets/humidity.png";

const WeatherApp = () => {

    let api_key = "0461ed99b02271ca0a2359e53c28ef6f";

    const [icon, setIcon] = useState(cloudicon);

    const search = async () => {
        const element = document.getElementsByClassName("cityinput")
        if(element[0].value==="")
        {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = data.wind.speed+" km/h";
        temperature[0].innerHTML = data.main.temp+"°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon ==="01d" || data.weather[0].icon ==="01n")
        {
            setIcon(clearicon);
        }
        else if(data.weather[0].icon ==="02d" || data.weather[0].icon ==="02n") 
        {
            setIcon(cloudicon)
        }
        else if(data.weather[0].icon ==="03d" || data.weather[0].icon ==="03n") 
        {
            setIcon(drizzleicon)
        }
        else if(data.weather[0].icon ==="04d" || data.weather[0].icon ==="04n") 
        {
            setIcon(drizzleicon)
        }
        else if(data.weather[0].icon ==="09d" || data.weather[0].icon ==="09n") 
        {
            setIcon(rainicon)
        }
        else if(data.weather[0].icon ==="10d" || data.weather[0].icon ==="10n") 
        {
            setIcon(rainicon)
        }
        else if(data.weather[0].icon ==="13d" || data.weather[0].icon ==="13n") 
        {
            setIcon(snowicon)
        }
        else
        {
            setIcon(clearicon)
        }


    }
  return (
    <div>
        <h2 className='heading'>WEATHER REPORT</h2>
    <div className='container'>
        <div className='topbar'>
          <input type='text' className='cityinput' placeholder='Search'/>
            <div className='search-icon' onClick={()=>{search()}}>
            <img src={searchicon} alt="" />
         </div>
        </div>
        <div className='weather-image'>
            <img src={icon} alt=''/>
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidityicon} alt='' className='icon' />
                <div className='data'>
                <div className='humidity-percent'>64%</div>
                <div className='text'>Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={windicon} alt='' className='icon' />
                <div className='data'>
                <div className='wind-rate'>18 km/h</div>
                <div className='text'>Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WeatherApp