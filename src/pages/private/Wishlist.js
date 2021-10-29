import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlistProvider";
import { WishlistCard } from "../../components/WishlistCard";
import { ReactComponent as Wishes } from "../../img/wishes.svg";
import React from "react";
export default function Wishlist() {
  const { wishlistItems } = useWishlist();
  return (
    <div>
      {wishlistItems.length === 0 && (
        <div className="center">
          <Wishes className="responsive-image" />
          <p className=" heading heading-4">Go catch some wishes at...</p>
          <Link to="/products">
            <button className="button button-primary">Products</button>
          </Link>
        </div>
      )}
      {wishlistItems.length > 0 && (
        <ul style={{ listStyle: "none" }} className="grid">
          {wishlistItems.map(
            ({
              id,
              name,
              brand,
              // category,
              // bestFor,
              price,
              quantity,
              globalDiscount,
              imageUrl,
              rating,
              delivery,
              colors,
              sizes
            }) => {
              return (
                <li key={id} className="card">
                  <WishlistCard
                    value={{
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
