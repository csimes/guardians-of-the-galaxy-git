import React, { useState } from 'react';

const Location = () => {
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
        window.localStorage.setItem("lat", JSON.stringify(position.coords.latitude));
        window.localStorage.setItem("lon", JSON.stringify(position.coords.longitude));
        }, () => {
        setStatus('Unable to retrieve your location');
        });}}

    return (
        <div className="Location">
            <p>{status}</p>
        </div>
    );
}

export default Location;