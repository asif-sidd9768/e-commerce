import { useContext } from "react";
import "./ProductDetailContent.css";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { NotificationContext } from "../../contexts/NotificationContext";

export const ProductDetailContent = ({ product }) => {
  const { name, price, description, isItemInCart } = product;
  const { addToCart } = useContext(CartContext);
  const { triggerNotification } = useContext(NotificationContext)

  const handleCart = () => {
    addToCart(product)
    triggerNotification("success", "Item Added to the cart.")
  }

  return (
    <div className="product-detail-content-container">
      <h2 className="product-detail-content-title">{name}</h2>
      <p className="product-detail-content-price">Price: ₹{price}</p>
      <p className="product-detail-content-description">
        Details: {description}
      </p>
      <button
        disabled={isItemInCart}
        onClick={handleCart}
        className="product-detail-content-add-cart-btn"
      >
        {isItemInCart ? "Added to Cart" : "Add to Cart"}
      </button>
      { isItemInCart &&  <Link to="/cart" className="go-to-cart">
        Go to cart <i class="fas fa-cart-shopping"></i>
      </Link>}
    </div>
  );
};
