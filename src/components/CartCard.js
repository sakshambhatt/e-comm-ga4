import { useCart } from "../contexts/cartProvider";
import { getFinalPrice } from "../functions/getFinalPrice";
import { ToggleWishlistButton } from "./ToggleWishlistButton";
import { RemoveFromCartButton } from ".//RemoveFromCartButton";

export default function CartCard({
  value: {
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
}) {
  const { cartDispatch } = useCart();

  return (
    <div className="card-container">
      <div className="horizontal-card card-shadow">
        <div className="badge-container">
          <img className="responsive-image" src={imageUrl} alt="shoe card" />
          <span className="badge badge-card">on sale!</span>
        </div>
        <div className="horizontal-card-description">
          <div>
            <p>
              <strong>{brand}</strong>
            </p>
            <p>
              <small>{name}</small>
            </p>
          </div>
          <div>
            <span className="final-price">
              &#8377;{getFinalPrice(price, globalDiscount) + " "}
            </span>
            <strike className="original-price">({price})</strike>
            <span className="percent-off"> {" " + globalDiscount}% off</span>
          </div>
          <div>
            <p>delivery: {delivery}</p>
          </div>
          <div>
            <p>available sizes (UK):</p>
            <ul className="list list-h">
              {sizes.map(({ id, inStock }) => {
                switch (inStock) {
                  case true:
                    return (
                      <li
                        style={{ fontWeight: "bold", color: "var(--green)" }}
                        key={id}
                      >
                        {id}
                      </li>
                    );
                  case false:
                    return (
                      <li style={{ color: "var(--red)" }} key={id}>
                        {id}
                      </li>
                    );
                  default:
                    return <li>error</li>;
                }
              })}
            </ul>
          </div>
          <div>quantity: {quantity}</div>
          <div>
            <ul className="list list-h">
              <li>
                <RemoveFromCartButton value={{ cartDispatch, id }} />
              </li>
              <li>4.5</li>
              <li>
                <ToggleWishlistButton
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
                    sizes
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
