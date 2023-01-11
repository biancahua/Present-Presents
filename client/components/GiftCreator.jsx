import React from 'react';

const GiftCreator = props => {
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?

  // when we click on the button, a modal should open that allows us to populate the form. There will be a submit button (post request to the server) that compiles the info written in the form and sends it to the server to add to the user's gift array
  
  return (
    <div className='gift_creator'>
      <button className='marketsButtons' onClick={() => {props.addGift(document.querySelector('#location_input').value)}}>Add New Gift</button> 
    </div>
  );
};
// try warpping everything in a form and adding an event listener
export default GiftCreator;