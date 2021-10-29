import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartProvider";
import { ReactComponent as CartImage } from "../img/shopping-cart.svg";
import { ReactComponent as Like } from "../img/like.svg";
import { ReactComponent as Profile } from "../img/user.svg";
export default function Header() {
  const { cartItems } = useCart();

  return (
    <header className="header header-cent">
      <Link className="link" to="/">
        <h1 className="heading heading-1">ShoeShop</h1>
      </Link>

      <nav className="nav">
        <Link to="/products" className="link">
          products
        </Link>

        <Link to="/cart" className="link">
          <div className="badge-container">
            <CartImage className="iconify-24" />
            {cartItems.length > 0 && (
              <span className="badge badge-icon">{cartItems.length}</span>
            )}
          </div>
        </Link>
        <Link to="/wishlist">
          <Like className="iconify-24" id="wishlist-image" />
        </Link>
        <Link to="/login" className="link" id="profile">
          <Profile className="iconify-24" />
        </Link>
      </nav>

      <hr width="100%" />
    </header>
  );
}
