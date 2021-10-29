export const sieveReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };

    case "FILTER":
      switch (action.payload) {
        case "NONE":
          return {
            ...state,
            showFormal: false,
            showSports: false,
            showCasual: false
          };
        case "SHOW_CASUAL":
          return {
            ...state,
            showFormal: false,
            showSports: false,
            showCasual: true
          };

        case "SHOW_FORMAL":
          return {
            ...state,
            showFormal: true,
            showSports: false,
            showCasual: false
          };

        case "SHOW_SPORTS":
          return {
            ...state,
            showFormal: false,
            showSports: true,
            showCasual: false
          };
        case "SHOW_FAST_DELIVERY":
          return {
            ...state,
            showFastDelivery: !state.showFastDelivery
          };
        default:
          console.log("inner switch has gone rogue...");
          break;
      }
      break;

    default:
      console.log("something is wrong with reducer function");
      break;
  }
};
