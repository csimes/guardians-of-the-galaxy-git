import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Location from "./components/site/Location";
// import NasaApp from "./components/apps/nasa/NasaApp";
import OpenWeatherApp from "./components/apps/open-weather/OpenWeatherApp";
import AppToggle from "./header";
import Footer from "./footer";
// import TicketMasterApp from "./components/apps/ticket-master/TicketMasterApp";
    

const App = () => {

    
    return (
        <div className="App">
            <AppToggle />
            <br />
            <Location />
            <OpenWeatherApp/>
            {/* <NasaApp /> */}
            {/* <TicketMasterApp /> */}
            <Footer />
        </div>
    );

}

export default App;