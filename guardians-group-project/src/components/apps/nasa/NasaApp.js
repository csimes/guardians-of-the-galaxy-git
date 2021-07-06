import React from "react";
import config from "../../../config";

const NasaPhoto = () => {
    let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${JSON.parse(
        window.localStorage.getItem("lon")
    )}&lat=${JSON.parse(
        window.localStorage.getItem("lat")
    )}&dim=0.15&api_key=${config.REACT_APP_NASA_API_KEY}`;

    return (
        <div>
            <img
                src={url}
                alt="Nasa Satellite"
                style={{ width: '50%', height: '50%' }}
            />
        </div>
    );
};

export default NasaPhoto;
