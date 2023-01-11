import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserBio from '../components/UserBio.jsx';
import GiftsContainer from './GiftsContainer.jsx';

const mapStateToProps = state => ({

});

class RecipientContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container">
        <h4 id="header">Recipient Container (will remove)</h4>
        <UserBio />        
      </div>
    )
  }
}

export default connect(mapStateToProps) (RecipientContainer);

// <UserBio /> add back in after you see RC in the browser

    // <span id="firstName"> {props.firstName}</span>
    // <span id="lastName"> {props.lastName}</span>     

    // <span id="firstName"> Bianca</span>
    // <span id="lastName"> Hua</span>