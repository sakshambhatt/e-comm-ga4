import { ReactComponent as Delete } from "../img/delete.svg";
export const RemoveFromCartButton = (value) => {
  const { cartDispatch, id } = value.value;
  return (
    <button
      className="button-image"
      onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: id })}
    >
      <Delete alt="remove from cart" />
    </button>
  );
};
