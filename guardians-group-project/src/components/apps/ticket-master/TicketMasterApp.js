import React, {useState, useEffect} from "react"
import config from "../../../config";
import {
    Card,
    CardTitle,
    CardText,
    CardDeck,
    CardSubtitle,
    CardBody,
} from "reactstrap";

const TicketMasterApp = () => {
    const [data, setData] = useState([]);
    const [name1, setName1] = useState([]);
    const [name2, setName2] = useState([]);
    const [name3, setName3] = useState([]);
    const [location1, setLocation1] = useState([]);
    const [location2, setLocation2] = useState([]);
    const [location3, setLocation3] = useState([]);
    const [img1, setImg1] = useState([]);
    const [img2, setImg2] = useState([]);
    const [img3, setImg3] = useState([]);
    const [fullDate1, setFull1] = useState([]);
    const [fullDate2, setFull2] = useState([]);
    const [fullDate3, setFull3] = useState([]);

    const fetchEvents = async () => {
        const res = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=${JSON.parse(
                window.localStorage.getItem("lat")
            )},${JSON.parse(
                window.localStorage.getItem("lon")
            )}&apikey=${config.REACT_APP_EVENT_KEY}`
        );
        const data = await res.json();
        const name1 = data._embedded.events[3].name;
        const name2 = data._embedded.events[4].name;
        const name3 = data._embedded.events[5].name;
        const location1 = data._embedded.events[3]._embedded.venues[0].name;
        const location2 = data._embedded.events[4]._embedded.venues[0].name;
        const location3 = data._embedded.events[5]._embedded.venues[0].name;
        const img1 = data._embedded.events[3].images[0].url;
        const img2 = data._embedded.events[4].images[0].url;
        const img3 = data._embedded.events[5].images[0].url;
        const dateInfo1 = data._embedded.events[3].dates.start.localDate;
        const dateInfo2 = data._embedded.events[4].dates.start.localDate;
        const dateInfo3 = data._embedded.events[5].dates.start.localDate;
        const convertDate1 = new Date(dateInfo1);
        const convertDate2 = new Date(dateInfo2);
        const convertDate3 = new Date(dateInfo3);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        };
        let fullDate1 = convertDate1.toLocaleDateString("default", options);
        let fullDate2 = convertDate2.toLocaleDateString("default", options);
        let fullDate3 = convertDate3.toLocaleDateString("default", options);
        
        setData(data);
        setName1(name1);
        setName2(name2);
        setName3(name3);
        setLocation1(location1);
        setLocation2(location2);
        setLocation3(location3);
        setImg1(img1);
        setImg2(img2);
        setImg3(img3);
        setFull1(fullDate1);
        setFull2(fullDate2);
        setFull3(fullDate3);
    };

    useEffect(() => {
        fetchEvents();
    }, []);
    console.log(data);

    return (
        <div>
            <CardDeck>
                <Card style={{ backgroundColor: 'rgb(18, 0, 150)', padding: '2%', width: '50%', marginLeft: '25%' }}>
                    <img
                        src={img1}
                        alt="Event 1"
                        style={{ width: '50%', height: '50%', marginLeft: '25%' }}
                    />
                    <CardBody>
                        <CardTitle tag="h5">{name1}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {fullDate1}
                        </CardSubtitle>
                        <CardText>
                            {location1}.
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={{ backgroundColor: 'rgb(24, 22, 37)', padding: '2%', width: '50%', marginLeft: '25%' }}>
                    <img
                        src={img2}
                        alt="Event 2"
                        style={{ width: '50%', height: '50%', marginLeft: '25%' }}
                    />
                    <CardBody>
                        <CardTitle tag="h5">{name2}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {fullDate2}
                        </CardSubtitle>
                        <CardText>
                            {location2}
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={{ backgroundColor: 'rgb(52, 57, 71)', padding: '2%', width: '50%', marginLeft: '25%' }}>
                    <img
                        src={img3}
                        alt="Event 3"
                        style={{ width: '50%', height: '50%', marginLeft: '25%' }}
                    />
                    <CardBody>
                        <CardTitle tag="h5">{name3}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {fullDate3}
                        </CardSubtitle>
                        <CardText>
                            {location3}
                        </CardText>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    );
}

export default TicketMasterApp;