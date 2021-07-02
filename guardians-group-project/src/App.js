import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userAddress: null
    };
  }

  render() {
    return(
      <div className='App'>
        <h2>Plan your next event!</h2>
        <br/>
        <h4>Current Location:</h4>
        <p>{this.state.userAddress}</p>
      </div>
    )
  }
};

export default App;