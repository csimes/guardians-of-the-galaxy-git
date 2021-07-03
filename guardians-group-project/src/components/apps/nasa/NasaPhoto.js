import React, {
    useState,
    useEffect
} from "react";
import {Latitude, Longitude} from "../../site/Location";
import config from "../../../config";


export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${Longitude}&lat=${Latitude}&date=2021-07-03&dim=0.15&api_key=${config.REACT_APP_NASA_API_KEY}`);
            const data = await res.json()
            setPhotoData(data);
        }

    }, [])

    if(!photoData) return <div />;

    return (
        <div><img src={photoData.url} alt={photoData.title} />
        </div>
        
        )

}