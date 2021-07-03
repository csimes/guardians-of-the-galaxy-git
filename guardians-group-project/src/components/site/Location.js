import React, { Component } from "react";
import config from "../../config";

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userLocation: null,
        };
        this.getLocation = this.getLocation.bind(this);
        this.showPosition = this.showPosition.bind(this);
        this.reverseGeocodeCoordinates =
            this.reverseGeocodeCoordinates.bind(this);
    }

    componentDidMount() {
        window.onload = (event) => {
            this.getLocation();
        };
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            alert("Geolocation not supported by this browser.");
        }
    }

    showPosition(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
        this.reverseGeocodeCoordinates()
    }

    reverseGeocodeCoordinates() {
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${config.REACT_APP_GOOGLE_API_KEY}`
        )
        .then(response => response.json())
        .then(data => this.setState({
            userLocation: data.results[4].formatted_address
        }))
        .catch(error => alert(error))
    }

    handleLocationError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied access to geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location info unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
            default:
                alert("An unknown error occurred.");
        }
    }



    render() {
        return (
            <div className="Location">
                <h2>Plan your next event!</h2>
                <br />
                <h4>Current Location:</h4>
                <p>City: {this.state.userLocation}</p>
            </div>
        );
    }
}


export default Location;

export const Latitude = React.createContext(this.state.latitude)
export const Longitude = React.createContext(this.state.longitude);