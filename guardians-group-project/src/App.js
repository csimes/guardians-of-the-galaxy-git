import React from "react";
import "./App.css";
import Location from "./components/site/Location";
import NasaApp from "./components/apps/nasa/NasaApp";
import OpenWeatherApp from "./components/apps/open-weather/OpenWeatherApp";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/site/Footer";
import TicketMasterApp from "./components/apps/ticket-master/TicketMasterApp";
import Header from "./components/site/Header";

const App = () => {

    return (
        <div className="App">
            <br/>
            <Header />
            <br/>
            {/* <AppToggle /> */}
            <br/>
            <OpenWeatherApp/>
            <br/>
            <Location />
            <NasaApp />
            <br/>
            <h3>Nearby Events:</h3>
            <br/>
            <TicketMasterApp />
            <br/>
            <Footer />
            <br/>
        </div>
    );
};

export default App;