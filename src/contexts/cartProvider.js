import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../functions/useReducers/cartReducer";
export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export default function CartProvider({ children }) {
  const [cartItems, cartDispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cartItems, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}
