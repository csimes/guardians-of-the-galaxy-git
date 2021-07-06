import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Location from "./components/site/Location";
import NasaApp from "./components/apps/nasa/NasaApp";
import OpenWeatherApp from "./components/apps/open-weather/OpenWeatherApp";
import AppToggle from "./components/site/Header";
import Footer from "./components/site/Footer";
import TicketMasterApp from "./components/apps/ticket-master/TicketMasterApp";

const App = () => {

    return (
        <div className="App">
            <br/>
            <h2>Plan your next event!</h2>
            <br/>
            <Location />
            <br/>
            <AppToggle />
            <br/>
            <OpenWeatherApp/>
            <br/>
            <NasaApp />
            <br/>
            <TicketMasterApp />
            <br/>
            <Footer />
        </div>
    );
};

export default App;