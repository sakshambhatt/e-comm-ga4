export const findShoeInWishlist = (shoeId, wishListItems) => {
  // console.log(shoeId);
  const found = wishListItems.find((shoe) => shoe.id === shoeId);
  return found;
};
