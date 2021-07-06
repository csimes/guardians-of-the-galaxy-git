import React, {useState, useEffect} from "react"
import config from "../../../config";

const TicketMasterApp = () => {
    const [name, setName] = useState([]);
    const [location, setLocation] = useState([]);
    const [img, setImg] = useState([]);
    const [fullDate, setFull] = useState([]);

    const fetchEvents = async () => {
        const res = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=${JSON.parse(
                window.localStorage.getItem("lat")
            )},${JSON.parse(
                window.localStorage.getItem("lon")
            )}&apikey=${config.REACT_APP_EVENT_KEY}`
        );
        const data = await res.json();
        const name = data._embedded.events[3].name;
        const location = data._embedded.events[3]._embedded.venues[0].name;
        const img = data._embedded.events[3].images[0].url;
        const dateInfo = data._embedded.events[3].dates.start.localDate;
        const convertDate = new Date(dateInfo);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        };
        let fullDate = convertDate.toLocaleDateString("default", options);
        
        setName(name);
        setLocation(location);
        setImg(img);
        setFull(fullDate);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <p>Event Name: {name}</p>
            <p>Event Date: {fullDate}</p>
            <p>Event Location: {location}</p>
            <img src={img} alt=''/>
        </div>
    );

}

export default TicketMasterApp;