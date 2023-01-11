import React from 'react';

const Gift = props => {
  return(

    <div className="gift_box">
      <p><span className='gift_title'>{giftTitle} </span></p>
      <button className='giftButtons' id='update_gift' onClick={() => props.addCard(props.marketEntry.marketId)}>Update Gift</button>
      <button className='giftButtons' id='delete_gift' onClick={() => props.deleteCard(props.marketEntry.marketId)}>Delete Gift</button>
    </div>
  );
};

export default Gift;