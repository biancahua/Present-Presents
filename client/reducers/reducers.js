import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const reducers = (state = initialState, action) => {
  let marketList;
  let totalCards;

  switch (action.type) {
    case types.ADD_RECIPIENT: {
      // increment lastMarketId and totalMarkets counters
      const newLMI = state.lastMarketId + 1;
      const newTM = state.totalMarkets + 1;
      
      for (let i = 0; i < state.marketList.length; i++) {
        console.log('inside loop');
        if (state.marketList[i].location == action.payload) { 
          console.log('inside map');
          return alert('Already added market to list!');
        }
      }

      console.log('after map');

      // create the new market object from provided data
      const newMarket = {
        marketId: newLMI,
        location: action.payload, //not action.payload
        cards: 0,
      };

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);

      // return updated state
      return {
        ...state,
        lastMarketId: newLMI,
        marketList: marketList,
        totalMarkets: newTM,
        newLocation: '',
      };
    }
    // end of case types.ADD.CARD

    case types.ADD_GIFT:
      
      return {
        ...state,
        newLocation: action.payload,
      };
    
    case types.UPDATE_GIFT: {

      totalCards = state.totalCards;
      // If you click on _"Add Card"_ on a given Market card, you should see the Cards and % of total update.  You should also see Total Cards increment by one.
      // action.payload = marketId
      // use passed in marketId to find index of marketList that the market is located
      // const currentMarketIndex = state.marketList.findIndex(obj => {return obj.marketId === action.payload});
      // increment current market's cards by one
      // console.log('index', currentMarketIndex);
      // const currentCards = state.marketList[currentMarketIndex].cards + 1;
      // increment total cards by one
      marketList = state.marketList.map((market, i) => {
        if (state.marketList[i].marketId == action.payload) {
          const cards = market.cards + 1;
          totalCards++;
          return {...market, cards};
        }
        else return market;
      });

      return {
        ...state,
        marketList,
        totalCards,
      }
    }
    // end of case types.ADD_CARD

    case types.DELETE_GIFT: {
      // If you click on _"Delete"_ Card on a given Market card, you should see the Cards and % of total update.  You should also see _"Total Cards"_ decrement by one.
      totalCards = state.totalCards;
      // use passed in marketId to find index of marketList that the market is located
      // const currentMarketIndex = state.marketList.findIndex(obj => {return obj.marketId === action.payload});
      // decrement market card
        // if market card is 0, do not decrement
      // let currentCards = state.marketList[currentMarketIndex].cards;
      // if (state.marketList[currentMarketIndex].cards > 0) {
      //   currentCards -= 1;
      // };
      // decrement total cards
      // let newTC = state.totalCards;
      // if (state.totalCards > 0) {
      //   newTC -= 1;
      // };
      marketList = state.marketList.map((market, i) => {
        if (state.marketList[i].marketId == action.payload && state.marketList[i].cards > 0) {
          const cards = market.cards - 1;
          totalCards--;
          return {...market, cards};
        }
        else return market; 
      });

      return {
        ...state,
        marketList,
        totalCards,
      };
    }
    // end of case types.DELETE_CARD
    default: {
      return state;
    }
  }
};

export default reducers;