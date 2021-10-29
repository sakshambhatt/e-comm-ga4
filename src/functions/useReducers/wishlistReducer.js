export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state, action.payload];

    case "REMOVE_FROM_WISHLIST":
      return state.filter((shoe) => shoe.id !== action.payload);

    default:
      console.log("something's wrong with wishlist reducer");
      break;
  }
};
