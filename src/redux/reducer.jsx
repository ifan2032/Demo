import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        wishList: "hi",
      };
    case DELETE_ITEM:
      return {
        wishList: "hi",
      };
    default:
      return {
        wishList: "hi",
      };
  }
};

export default reducer;