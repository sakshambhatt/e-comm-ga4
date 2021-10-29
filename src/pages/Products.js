import { useState, useReducer } from "react";
import { getSortedData } from "../functions/getSortedData";
import { getFilteredData } from "../functions/getFilteredData";
import { findShoeInWishlist } from "../functions/findShoeInWishlist";
import { sieveReducer } from "../functions/useReducers/sieveReducer";
import { useCart } from "../contexts/cartProvider";
import { useWishlist } from "../contexts/wishlistProvider";
import { useAxios } from "../hooks/useAxios";
import { Filter } from "../components/Filter";
import { Sort } from "../components/Sort";
import { ProductCard } from "../components/ProductCard";
import { FetchStatus } from "../components/FetchStatus";
import React from "react";

export default function Products() {
  const [items, setItems] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("none");
  const [
    { sortBy, showCasual, showSports, showFormal, showFastDelivery },
    productsDispatch
  ] = useReducer(sieveReducer, {
    sortBy: "NONE",
    showCasual: false,
    showSports: false,
    showFormal: false
  });

  const sortedData = getSortedData([...items], sortBy);
  const filteredData = getFilteredData(sortedData, {
    showCasual,
    showFormal,
    showSports,
    showFastDelivery
  });
  useAxios({ setFetchStatus, setItems });

  const { cartDispatch } = useCart();
  const { wishlistItems, wishlistDispatch } = useWishlist();
  return (
    <div>
      <FetchStatus value={{ fetchStatus }} />
      <div className="sieve-container">
        <Sort value={{ productsDispatch }} />
        <Filter value={{ productsDispatch, showFastDelivery }} />
      </div>

      <ul>
        {filteredData.map(
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
                <ProductCard
                  key={id}
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
                    sizes,
                    items,
                    setItems,
                    cartDispatch,
                    findShoeInWishlist,
                    wishlistDispatch,
                    wishlistItems
                  }}
                />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
