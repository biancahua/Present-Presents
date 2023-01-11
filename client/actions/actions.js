import * as types from '../constants/actionTypes';


export const updateGift = gift => ({
  type: types.UPDATE_GIFT,
  payload: gift
});

export const deleteGift = gift => ({
  type: types.DELETE_GIFT,
  payload: gift
});

export const addGift = gift => ({
  type: types.ADD_GIFT,
  payload: gift
});

export const addRecipient = name => ({
  type: types.ADD_RECIPIENT,
  payload: name
});
