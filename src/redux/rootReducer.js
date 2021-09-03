import * as actionTypes from './action-types'

const initState = {
  test: 'Redux Test',
  cartList: []
};

export const rootReducer = (state = initState, action) => {
  console.log('IN REDUCER state = ', state);
  console.log('IN REDUCER action = ', action);

  switch (action.type) {
    case actionTypes.CHANGE_VALUE:
      return {
        ...state,
        test: 'Message changed',
      };
    case actionTypes.CHANGE_BY_PARAM:
      return {
        ...state,
        test: action.payload,
      };

    case actionTypes.ADD_TO_CART:
      const newlist = [...state.cartList, action.payload]

      console.log(newlist)
      return{
        ...state,
        cartList : newlist
      }
    default:
      return state;
  }
};
