import React, { useEffect, useState } from "react";
import config from "../../../config";
import { ListGroup, ListGroupItem, Button, ButtonGroup } from 'reactstrap';

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
        const overall = data.weather[0].description;
        setResults(data);
        setTemp(temp);
        setFeels(feels_like);
        setOverall(overall);
    };

        const fetchWeather2 = async () => {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${JSON.parse(
                    window.localStorage.getItem("lat")
                )}&lon=${JSON.parse(
                    window.localStorage.getItem("lon")
                )}&units=metric&appid=${config.REACT_APP_WEATHER_KEY}`
            );
            const data = await res.json();
            const temp = data.main.temp;
            const feels_like = data.main.feels_like;
            const overall = data.weather[0].description;
            setResults(data);
            setTemp(temp);
            setFeels(feels_like);
            setOverall(overall);
        };

    useEffect(() => {
        fetchWeather();
        fetchWeather2();
    }, []);

    return (
        <div>
            <ListGroup
                style={{ width: "50%", marginLeft: "25%", fontSize: "1.5rem" }}
            >
                <ListGroupItem
                    style={{
                        backgroundColor: "rgb(132, 182, 211)",
                        fontWeight: "700",
                    }}
                >
                    Here's today's forecast for {results.name}:
                </ListGroupItem>
                <ListGroupItem
                    style={{ backgroundColor: "rgb(132, 182, 211)" }}
                >
                    Temp: {temp}
                </ListGroupItem>
                <ListGroupItem
                    style={{ backgroundColor: "rgb(132, 182, 211)" }}
                >
                    Feels-like: {feels_like}
                </ListGroupItem>
                <ListGroupItem
                    style={{ backgroundColor: "rgb(132, 182, 211)" }}
                >
                    Overall: {overall}
                </ListGroupItem>
            </ListGroup>
            <br />
            <ButtonGroup>
                <Button
                    outline color="info"
                    onClick={fetchWeather2}
                >
                    Celsius
                </Button>
                <Button
                    outline color="info"
                    onClick={fetchWeather}
                >
                    Fahrenheit
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default OpenWeatherApp;