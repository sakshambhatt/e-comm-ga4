export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const found = state.find((shoe) => shoe.id === action.payload.id);
      if (found) {
        return state.map((shoe) => {
          return shoe.id === action.payload.id
            ? { ...shoe, quantity: shoe.quantity + 1 }
            : shoe;
        });
      }
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((shoe) => shoe.id !== action.payload);
    default:
      break;
  }
};
