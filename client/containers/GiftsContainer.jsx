import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import child components...
import GiftCreator from '../components/GiftCreator.jsx';
import GiftsDisplay from '../components/GiftsDisplay.jsx';
const mapStateToProps = state => (
  {
  // provide pertinent state here

  }
);

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  // addCard : (marketId) => dispatch(actions.addCardActionCreator(marketId)),

  // addMarket : (location) => dispatch(actions.addMarketActionCreator(location)),

  // deleteCard : (marketId) => dispatch(actions.deleteCardActionCreator(marketId))
});

class GiftsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return(
      <div className="innerbox">
        <GiftCreator addMarket={this.props.addMarket}/>
        <GiftsDisplay addMarket={this.props.addMarket} totalCards={this.props.totalCards} marketList={this.props.marketList} deleteCard={this.props.deleteCard} addCard={this.props.addCard}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (GiftsContainer);