export const initialState = {
  basket: [],
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
};

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
