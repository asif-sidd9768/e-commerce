import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";

import "./header.css"
import { CartPreview } from "./cartPreview/CartPreview";

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart } = useContext(CartContext);

  const getActiveStyles = ({ isActive }) => ({
    padding: "0.5rem 0.7rem",
    color: isActive ? "black" : "",
    backgroundColor: isActive ? "#d0cbb9" : "",
    borderRadius: isActive ? "1rem" : ""
  });

  const toggleCart = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen)
  }

  const cartItemsTotal = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <div className="nav-container">
      <div>
        <h1 className="nav-title">Weird Choice</h1>
      </div>
      <div className="nav-right-side">
        <nav className="nav-items">
          <NavLink className="nav-item" to="/" style={getActiveStyles}>
            Home
          </NavLink>{" "}
          <NavLink className="nav-item" to="/cart" style={getActiveStyles}>
            Cart
          </NavLink>
        </nav>
        <CartPreview isCartOpen={isCartOpen} cart={cart} cartItemsTotal={cartItemsTotal} toggleCart={toggleCart} />
      </div>
    </div>
  );
};
