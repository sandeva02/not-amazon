export const initialState = {
  basket: [],
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((total, { price }) => total + price, 0);

const reducer = (state, { type, payload }) => {
  console.log({ type, payload });
  switch (type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, payload],
      };
    default:
      return state;
  }
};

export default reducer;
