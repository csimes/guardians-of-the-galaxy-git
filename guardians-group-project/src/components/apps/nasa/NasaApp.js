import React, {
    useState,
    useEffect
} from "react";
import Location from "../../site/Location";
import config from "../../config";


const NasaApp = () => {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        async function fetchPhoto() {
            const res = await fetch (`https://api.nasa.gov/planetary/earth/imagery?lon=${this.state.longitude}&lat=${this.state.latitude}&date=2018-01-01&dim=0.15&api_key=${config.REACT_APP_NASA_API_KEY}`);
    }
    
    )

}

export default NasaApp;