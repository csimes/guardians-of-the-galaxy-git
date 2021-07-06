import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

const WeatherToggle = (props) => {
    const [rSelected, setRSelected] = useState(null);

    return (
        <div>
            <ButtonGroup>
                <Button
                    color="primary"
                    onClick={() => setRSelected(1)}
                    active={rSelected === 1}
                >
                    Celsius
                </Button>
                <Button
                    color="primary"
                    onClick={() => setRSelected(2)}
                    active={rSelected === 2}
                >
                    Fahrenheit
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default WeatherToggle;