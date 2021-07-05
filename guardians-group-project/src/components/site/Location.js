import React, { useEffect, useState } from 'react';

const Location = () => {
    let [lat, setLat] = useState(null);
    let [lon, setLon] = useState(null);
    const [status, setStatus] = useState(null);

    window.onload = () => {
        getLocation();
    };
    const getLocation = () => {
    if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
    } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        window.localStorage.setItem("lat", JSON.stringify(position.coords.latitude));
        window.localStorage.setItem("lon", JSON.stringify(position.coords.longitude));
        }, () => {
        setStatus('Unable to retrieve your location');
        });}}

    
    return (
        <div className="Location">
            <h2>Plan your next event!</h2>
            <br />
            <h3>Current Location:</h3>
            <p>{status}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lon}</p>
            {/* <NasaPhoto lat={lat} lon={lon} /> */}
            {/* <OpenWeatherApp lat={lat} lon={lon}/> */}
            {/* <h4>City: {city}</h4> */}
        </div>
    );
}

export default Location;