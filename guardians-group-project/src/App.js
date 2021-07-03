import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
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
      <div className="App">
        <h2>Plan your next event!</h2>
        <br />
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <h4>Current Location:</h4>
        <p>City: {this.state.userAddress}</p>
      </div>
    );
  }
}

export default App;