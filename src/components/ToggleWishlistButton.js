import { useWishlist } from "../contexts/wishlistProvider";
import { findShoeInWishlist } from "../functions/findShoeInWishlist";
import { ReactComponent as Like } from "../img/like.svg";
import { ReactComponent as Liked } from "../img/liked.svg";
export const ToggleWishlistButton = (value) => {
  const {
    id,
    name,
    brand,
    price,
    quantity,
    globalDiscount,
    imageUrl,
    rating,
    delivery,
    colors,
    sizes
  } = value.value;
  const { wishlistItems, wishlistDispatch } = useWishlist();
  return (
    <button className="button-image">
      {!findShoeInWishlist(id, wishlistItems) && (
        <Like
          alt="add to wishlist button"
          onClick={() => {
            wishlistDispatch({
              type: "ADD_TO_WISHLIST",
              payload: {
                id,
                name,
                brand,
                price,
                quantity,
                globalDiscount,
                imageUrl,
                rating,
                delivery,
                colors,
                sizes
              }
            });
          }}
        />
      )}
      {findShoeInWishlist(id, wishlistItems) && (
        <Liked
          alt="remove from wishlist button"
          onClick={() =>
            wishlistDispatch({
              type: "REMOVE_FROM_WISHLIST",
              payload: id
            })
          }
        />
      )}
    </button>
  );
};
