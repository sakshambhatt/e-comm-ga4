import { getFinalPrice } from "./getFinalPrice";
export const getSortedData = (prodArr, sortBy) => {
  switch (sortBy) {
    case "NONE":
      return prodArr;
    case "PRICE_LOW_TO_HIGH":
      return prodArr.sort(
        (a, b) =>
          getFinalPrice(a.price, a.globalDiscount) -
          getFinalPrice(b.price, b.globalDiscount)
      );
    case "PRICE_HIGH_TO_LOW":
      return prodArr.sort(
        (a, b) =>
          getFinalPrice(b.price, b.globalDiscount) -
          getFinalPrice(a.price, a.globalDiscount)
      );
    case "RATING_HIGH_TO_LOW":
      return prodArr.sort((a, b) => b.rating - a.rating);
    default:
      console.log("something is wrong with getSortedData");
      break;
  }
};
