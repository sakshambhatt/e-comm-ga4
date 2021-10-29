import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartProvider";
import { getFinalPrice } from "../../functions/getFinalPrice";
import { useWishlist } from "../../contexts/wishlistProvider";
import CartCard from "../../components/CartCard";
import { ReactComponent as Empty } from "../../img/empty.svg";
import React from "react";

export default function Cart() {
  const { cartItems, cartDispatch } = useCart();
  const { wishlistItems, wishlistDispatch } = useWishlist();
  return (
    <div>
      {cartItems.length === 0 && (
        <div className="center">
          <Empty className="responsive-image" />
          <p className="heading heading-4">
            Treat your feet. Fill your cart at...
          </p>
          <Link to="/products">
            <button className="button button-primary">Products</button>
          </Link>
        </div>
      )}
      {cartItems.length > 0 && (
        <ul style={{ listStyle: "none" }}>
          {cartItems.map(
            ({
              id,
              name,
              brand,
              // category,
              // bestFor,
              quantity,
              price,
              globalDiscount,
              imageUrl,
              rating,
              delivery,
              colors,
              sizes
            }) => {
              return (
                <li key={id} className="card">
                  <CartCard
                    value={{
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
                      sizes,
                      getFinalPrice,
                      cartDispatch,
                      wishlistItems,
                      wishlistDispatch
                    }}
                  />
                </li>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
}
