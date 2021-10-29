import { StrictMode } from "react";
import ReactDOM from "react-dom";
import setupMockServer from "./api/mock.server";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import WishlistProvider from "./contexts/wishlistProvider";
import CartProvider from "./contexts/cartProvider";
import LoginProvider from "./contexts/loginProvider";
setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <LoginProvider>
        <WishlistProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishlistProvider>
      </LoginProvider>
    </Router>
  </StrictMode>,
  rootElement
);
