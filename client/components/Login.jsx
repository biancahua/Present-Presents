import React from 'react';

const Login = props => {

  // loginFunction 
    // sends post request to server with first and last name of user
    // if user found, post request will render user bio and gift container components 
      // returns with dispatch for login if found
      // if found, find user in state and apply 
    // if NOT found, post request will add user dispatch for add user if not found

  return(

    <div className="login_input">
      <h4>Access Recipient</h4>
      <input type='text' id='firstname_input'></input>
      <input type='text' id='lastname_input'></input>
      <button className='loginButtons' onClick={() => {
        return {
          firstName: document.querySelector('#firstName_input').value, 
          lastName: document.querySelector('#lastName_input')}
      }}>Find Recipient</button> 
    </div>
  );
};

export default Login;

/*
      <button className='loginButtons' onClick={() => { return {
        firstName: document.querySelector('#firstName_input').value, 
        lastName: document.querySelector('#lastName_input')})}}>Find Recipient</button> 
*/
