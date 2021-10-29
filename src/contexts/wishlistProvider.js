import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../functions/useReducers/wishlistReducer";
export const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export default function WishlistProvider({ children }) {
  const [wishlistItems, wishlistDispatch] = useReducer(wishlistReducer, []);
  return (
    <WishlistContext.Provider value={{ wishlistItems, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}
