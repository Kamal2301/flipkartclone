import {ITEM_TYPE} from './CommonTypes/ResponseItemType';

export const ADD_TO_FAV = 'addticart';

export function addToFavrouit(item: ITEM_TYPE) {
  return {
    type: ADD_TO_FAV,
    data: item,
  };
}
