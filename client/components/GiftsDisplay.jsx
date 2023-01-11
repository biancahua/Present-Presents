import React from 'react';
import Gift from './Gift.jsx';

const GiftsDisplay = props => {
  // create array to store instances of MarketDisplay
  
  console.log('marketsdisplay:', props.marketList);
  const marketArray = [];
  for (let i = 0; i < props.marketList.length; i++) {
    marketArray.push(<Gift key={i} marketEntry={props.marketList[i]} totalCards={props.totalCards} deleteCard={props.deleteCard} addCard={props.addCard}/>); //put more logic here for poplating
  }

  return (
    <div className="displayBox">
      <h4>Markets</h4>
      {marketArray}
    </div>
  )
};

export default GiftsDisplay;