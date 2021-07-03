import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Location from "./components/site/Location";
import NasaPhoto from "./components/apps/nasa/NasaPhoto";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Location />
                <NasaPhoto />
            </div>
    );
}
    }
    

export default App;
