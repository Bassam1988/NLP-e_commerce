import * as actions from "../actions/actionTypes";

const initialState = {
  products: [],
};

export default function productReducer (state = initialState, action) {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case actions.DEL_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case actions.ADD_PRODUCT:
      console.log("caseAdd");
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}
