import { useContext } from "react";
import "./CartItemList.css"
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductsContext";
import { NotificationContext } from "../../contexts/NotificationContext";

export const CartItemList = () => {
  const { cart, decreaseQuantity, increaseQuantity, removeItemFromCart } = useContext(CartContext);
  const { triggerNotification } = useContext(NotificationContext)
  
  const handleItemRemove = (itemId) => {
    triggerNotification("error", "Item removed from the cart.")
    removeItemFromCart(itemId)
  }

  return (
    <div className="cart-list-item-container">
      {
        cart.map(({id, name, price, quantity,thumbnail}) => 
          <div className="cart-list-products" key={id}>
            <div className="cart-list-item-image">
              <img src={thumbnail} alt="" className="cart-list-item-thumbnail"/>
              <span className="cart-list-item-name">{name}</span>
            </div>
            <div className="cart-list-price-and-quantity">
              <div className="quantity-control">
                <button value="previous" onClick={() => decreaseQuantity(id)}>
                  <i class="fas fa-arrow-left"></i>
                </button>
                <span className="quantity-text">{quantity}</span>
                <button value="next" onClick={() => increaseQuantity(id)}>
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
              <span className="cart-list-item-multiplier">x</span> 
              <span className="cart-list-item-price">{price}</span>
              <span className="cart-list-item-multiplier">=</span>
              <span className="cart-list-item-price">{quantity * price}</span>
              <span className="cart-list-item-remove-icon" onClick={() => handleItemRemove(id)}><i class="fas fa-circle-xmark"></i></span>
            </div>
          </div>
        )
      }
    </div>
  )
}