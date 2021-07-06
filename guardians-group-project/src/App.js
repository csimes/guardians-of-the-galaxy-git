import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Location from "./components/site/Location";
import NasaApp from "./components/apps/nasa/NasaApp";
import OpenWeatherApp from "./components/apps/open-weather/OpenWeatherApp";
import AppToggle from "./components/site/AppToggle";
import Footer from "./components/site/Footer";
import TicketMasterApp from "./components/apps/ticket-master/TicketMasterApp";
import Header from "./components/site/Header";

const App = () => {

    return (
        <div className="App">
            <br/>
            <Location />
            <br/>
            <Header />
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