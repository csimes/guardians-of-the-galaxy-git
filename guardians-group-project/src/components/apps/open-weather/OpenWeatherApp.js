import React, { useEffect, useState } from "react";
import config from "../../../config";
import WeatherStyle from "./WeatherStyle";

function OpenWeatherApp() {
    const [results, setResults] = useState([]);
    const [temp, setTemp] = useState([]);
    const [feels_like, setFeels] = useState([]);
    const [overall, setOverall] = useState([]);

    const fetchWeather = async () => {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${JSON.parse(
                window.localStorage.getItem("lat")
            )}&lon=${JSON.parse(
                window.localStorage.getItem("lon")
            )}&units=imperial&appid=${config.REACT_APP_WEATHER_KEY}`
        );
        const data = await res.json();
        const temp = data.main.temp;
        const feels_like = data.main.feels_like;
        const overall = data.weather[0].description
        setResults(data);
        setTemp(temp);
        setFeels(feels_like);
        setOverall(overall);
    };
    
    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <div>
            <h3>Here's today's forecast for {results.name}:</h3>
            <br/>
            <h4>Temp: {temp}</h4>
            <h4>Feels-like: {feels_like}</h4>
            <h4>Overall: {overall}</h4>
            <WeatherStyle />
        </div>
    );
};

export default OpenWeatherApp;