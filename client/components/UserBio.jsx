import React from 'react';

const UserBio = props => {
  // fetch the user information; this function needs to be written in the app container and drilled or passed to children

  // edit function 
    // fetch user information and reassign 
    // should pop up module if possible

  return(

    <div className="recipient_box">
      <h2 id='name'>Bianca Hua</h2>
      <span id='birthday'>birthday </span>
      <span id='hobbies'>hobbies</span>
      <section className="edit_user">
        <button id='update_recipient' onClick={() => {1}}>Update Recipient</button> 
        <button id='delete_recipient' onClick={() => {2}}>Delete Recipient</button> 
      </section>
    </div>
  );
};

export default UserBio;

{/* <button className='edit' onClick={() => props.addCard(props.marketEntry.marketId)}>Update Bio</button>
<button className='delete_recipient' onClick={() => props.deleteCard(props.marketEntry.marketId)}>Delete User</button> */}