import React, { Component } from 'react';
import RecipientContainer from '../containers/RecipientContainer.jsx';
import GiftsContainer from '../containers/GiftsContainer.jsx';
import Login from './Login.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Login />
        <RecipientContainer />
      </div>
    )
  }
}

export default App; 

/*

        <RecipientContainer />
        <GiftsContainer />
*/