import React, { useEffect, useState } from "react";
import config from "../../../config";
import WeatherDisplay from "./WeatherDisplay";

function OpenWeatherApp() {
const [results, setResults] = useState([]);

const fetchWeather = async () => {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${JSON.parse(
                    window.localStorage.getItem("lat")
                )}&lon=${JSON.parse(
                    window.localStorage.getItem("lon")
                )}&units=imperial&appid=${config.REACT_APP_WEATHER_KEY}`
            );
            const data = await res.json();
            setResults(data);
            }

            useEffect(() => {
                fetchWeather();
            }, []);
            console.log(results)

    return (
        <div>
            {/* <h1>Today in {JSON.stringify(results.name)}</h1>
            <h2>Temp: {JSON.stringify(results.main.temp)}</h2>
            <h2>Feel: {JSON.stringify(results.weather[0].description)}</h2>
            <h2>Here is the weather: {JSON.stringify(results)}</h2> */}
            <h3>Here's today's forecast for {results.name}:</h3>
            {/* <p>There will be a high of {results.main.temp_max} , with a low of {results.main.temp_min}. It is currently {results.main.temp}. </p> */}
            
            <WeatherDisplay />
            {/* <p>{props.lat}</p>
            <p>{props.lon}</p> */}
        </div>
    );
}
export default OpenWeatherApp;

/**
https://api.openweathermap.org/data/2.5/weather?lat=41.40338&lon=2.17403&appid=6ed243b44ce97cd8942dfc57e576db2a
 */
