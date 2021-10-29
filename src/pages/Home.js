import shoeShop from "../img/shoeShop.jpg";
import React from "react";
export default function Home() {
  return (
    <div className="center">
      <p className="heading heading-4">
        a place to buy all kinds of shoes for men
      </p>
      <img className="responsive-image" src={shoeShop} alt="shoeShop banner" />
    </div>
  );
}
