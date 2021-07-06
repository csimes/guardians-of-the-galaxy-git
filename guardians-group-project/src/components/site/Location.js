import React, { useState } from "react";
import { List, ListInlineItem } from 'reactstrap';

const Location = () => {
    let [lat, setLat] = useState(null);
    let [lon, setLon] = useState(null);
    const [status, setStatus] = useState(null);

    window.onload = () => {
        getLocation();
    };
    const getLocation = () => {
        if (!navigator.geolocation) {
        setStatus("Geolocation is not supported by your browser");
        } else {
        setStatus("Locating...");
        navigator.geolocation.getCurrentPosition(
            (position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
            window.localStorage.setItem(
                "lat",
                JSON.stringify(position.coords.latitude)
            );
            window.localStorage.setItem(
                "lon",
                JSON.stringify(position.coords.longitude)
            );
            },
            () => {
            setStatus("Unable to retrieve your location");
            }
        );
        }
    };

    return (
        <div className="Location">
            <List type="inline" style={{fontSize: '1.5rem'}}>
                <ListInlineItem style={{fontWeight: '700'}}>Current Location:</ListInlineItem>
                <ListInlineItem>latitude: {lat}</ListInlineItem>
                <ListInlineItem>longitude: {lon}</ListInlineItem>
            </List>
            <br />
            <p>{status}</p>
        </div>
    );
};

export default Location;
