import { useCart } from "../contexts/cartProvider";

export const AddToCartButton = (value) => {
  const { cartDispatch } = useCart();
  const {
    id,
    name,
    brand,
    quantity,
    price,
    globalDiscount,
    imageUrl,
    rating,
    delivery,
    colors,
    sizes
  } = value.value;
  return (
    <button
      className="button button-primary"
      onClick={() =>
        cartDispatch({
          type: "ADD_TO_CART",
          payload: {
            id,
            name,
            brand,
            quantity,
            price,
            globalDiscount,
            imageUrl,
            rating,
            delivery,
            colors,
            sizes
          }
        })
      }
    >
      add to cart
    </button>
  );
};
