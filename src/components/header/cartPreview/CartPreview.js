import { useEffect } from "react";
import { CartPreviewTable } from "../cartPreviewTable/CartPreviewTable"
import "./CartPreview.css"

export const CartPreview = ({toggleCart, cartItemsTotal, cart, isCartOpen}) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.id !== "cart-icon" && isCartOpen) {
        toggleCart();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen]);
  return (
    <div>
      <button id="cart-icon" className={`cart-icon ${isCartOpen ? "cart-open" : ""}`} onClick={toggleCart}>
        {cart.length !== 0 && <div className="cart-item-count"><span className="cart-item-count-text">{cartItemsTotal}</span></div>} <i class="fas fa-cart-shopping"></i>
        {isCartOpen && cart.length === 0 && <div className="cart-details">
            Nothing to view! Add items...
          </div>}
        {isCartOpen && cart.length !== 0 && (
          <div className="cart-details">
            <CartPreviewTable cart={cart} />
          </div>
        )}
        </button>
    </div>
  )
}