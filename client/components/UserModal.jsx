import React, { useState, useEffect } from 'react';

const UserModal = props => {

  // Save Details will post the info to the server; the response with the updated object will be saved as payload in the action creator and will be dispatched to the reducer to update state

  return(

    <div className="gift_modal">
      <h3>Recipient Details</h3>
      <span><strong>Title: </strong></span>
      <input type='text' id='title_input'>title</input>
      <span><strong>Seller: </strong></span>
      <input type='text' id='vendor_input'>seller</input>
      <span><strong>Price: </strong></span>
      <input type='text' id='price_input'>price</input>
      <span><strong>URL: </strong></span>
      <input type='url' id='link_input'>{url}</input>
      <button className='detailsButton' onClick={() => {props.addRecipient({
        Title: document.querySelector('#firstName_input').value, 
        Seller: document.querySelector('#lastName_input').value,
        Price: document.querySelector('#firstName_input').value, 
        URL: document.querySelector('#firstName_input').value})}}>Save Details</button> 
    </div>
  );
};

export default UserModal;



