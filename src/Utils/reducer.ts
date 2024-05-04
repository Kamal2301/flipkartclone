import {ITEM_TYPE} from './CommonTypes/ResponseItemType';
import {ADD_TO_FAV} from './action';

const initialState: Array<ITEM_TYPE> = [];
export const favreducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return [...state, action.data];
    case 'IMC':
      return action.data;
    default:
      return state;
  }
};
