import {
    ADD_TO_CART,
    FETCH_DATA,
    FETCH_TO_CART,
    GET_SINGLE_PRODUCT,
    REMOVE_TO_CART,
    SET_ORDER
  } from "./action";
  
  const initState = {
    product: [],
    currentProduct: {},
    cart: [],
    order: []
  };
const productReducer = (state = initState, action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      }
      case FETCH_TO_CART: {
        return {
          ...state,
          cart: [...action.payload]
        };
      }
      case REMOVE_TO_CART: {
        return {
          ...state,
          cart: [action.payload]
        };
      }
      default:
        return state;
    }
  };
  export default productReducer;