import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
import NasaPhoto from "../apps/nasa/NasaApp";
import OpenWeatherApp from "../apps/open-weather/OpenWeatherApp";

const AppToggle = () => {
    const [rSelected, setRSelected] = useState(null);
  
    return (
        <div>
            <h5>Click to see your:</h5>
            <ButtonGroup>
                <Button
                    color="primary"
                    onClick={OpenWeatherApp}
                    // active={rSelected === 1}
                    >
                    Local Forecast
                </Button>
                <Button
                    color="primary"
                    onClick={NasaPhoto}
                    // active={rSelected === 2}
                    >
                    onClick={() => setRSelected(2)}
                    active={rSelected === 2}
                    >
                    Satellite Image
                </Button>
                <Button
                    color="primary"
                    onClick={() => setRSelected(3)}
                    active={rSelected === 3}>
                    Local Events
                </Button>
            </ButtonGroup>
            
            {/* <p>Selected: {rSelected}</p> */}
            
        </div>
    );
};

export default AppToggle;