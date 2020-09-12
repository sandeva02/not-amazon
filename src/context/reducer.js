export const initialState = {
  basket: [],
  user: null,
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  SET_USER: "SET_USER",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((total, { price }) => total + price, 0);

const reducer = (state, { type, payload }) => {
  console.log({ state, type, payload });
  switch (type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, payload],
      };
    case actionTypes.REMOVE_FROM_BASKET:
      const indexToRemove = state.basket.findIndex(
        (item) => item.id === payload
      );
      const newBasket = [...state.basket];
      indexToRemove >= 0
        ? newBasket.splice(indexToRemove, 1)
        : console.warn(
            `Can't remove product (id: ${payload}) as its not in basket!`
          );
      return { ...state, basket: newBasket };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default reducer;
