

// import React, {useState, useEffect} from "react"
// import config from "../../../config";

// const TicketMasterApp = () => {

// const [results, setResults] = useState([]);

// const fetchEvents = async () => {
//     const res = await fetch(
//         `https://app.ticketmaster.com/discovery/v2/events.json?lat=${JSON.parse(
//             window.localStorage.getItem("lat")
//         )&lon=${JSON.parse(
//             window.localStorage.getItem("lon")
//         )}&apikey=${config.REACT_APP_EVENT_KEY}`
//     );
//     const data = await res.json();
//     setResults(data);
// };

// useEffect(() => {
//     fetchEvents();
// }, []);
// console.log(results);



//     return (
//         <div>
//             <p>Event Name: {results.events.name}</p>
//             <p>URL: {results.events.url}</p>
//             <p>Information: {results.events.info}</p>
//         </div>
//     );


// }



// export default TicketMasterApp;
