import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Location from "./components/site/Location";
import NasaApp from "./components/apps/nasa/NasaApp";
import OpenWeatherApp from "./components/apps/open-weather/OpenWeatherApp";
import AppToggle from "./components/site/AppToggle";
// import TicketMasterApp from "./components/apps/ticket-master/TicketMasterApp";
    

const App = (props) => {

    
    return (
        <div className="App">
            <AppToggle />
            <br />
            <Location />
            <OpenWeatherApp/>
            <NasaApp />
            {/* <TicketMasterApp /> */}
        </div>
    );

}

export default App;
