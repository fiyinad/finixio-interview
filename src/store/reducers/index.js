import * as actionTypes from '../actions';
import { calculatePriceChange } from '../../helper/index';

const initialState = {
    coins: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_OR_UPDATE_COIN:

            const newOrUpdatedCoin = {
                ...action.payload,
                priceIncrease: parseFloat(calculatePriceChange(action.payload.openingPrice, action.payload.currentPrice))
            }

            const tempState = {
                ...state,
                coins: [...state.coins]
            };
            const foundIndex = tempState.coins.findIndex(e => e.name === action.payload.name);
            if (!foundIndex) {
                // add new coin
                tempState.coins[foundIndex] = { ...newOrUpdatedCoin };
            } else {
                // update existing coin 
                tempState.coins.push(newOrUpdatedCoin);
            }

            tempState.coins.sort((a, b) => (a.priceIncrease > b.priceIncrease) ? 1 : ((b.priceIncrease > a.priceIncrease) ? -1 : 0)).reverse()

            return {
                ...state,
                coins: [...tempState.coins]
            }
        default:
            return state;
    }
}

export default rootReducer;