import { Button, ButtonGroup } from "reactstrap";
import React, { useState } from "react";

const AppToggle = (props) => {
    const [rSelected, setRSelected] = useState(null);

    return (
        <div>
            <h5>Click to see your:</h5>
            <ButtonGroup>
                <Button
                    color="primary"
                    onClick={() => setRSelected(1)}
                    active={rSelected === 1}
                >
                    Local Forecast
                </Button>
                <Button
                    color="primary"
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
