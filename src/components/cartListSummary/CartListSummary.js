import { useContext, useState } from "react"
import "./CartListSummary.css"
import { CartContext } from "../../contexts/CartContext"
import { checkout } from "../../services/checkout"

export const CartListSummary = () => {
  const [checkedOut, setCheckedOut] = useState(false)
  const {cart} = useContext(CartContext)
  const cartItemsTotal = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const cartItemsTotalPrice = cart.reduce((acc, curr) => acc + curr.price*curr.quantity, 0);

  const handleCheckout = async () => {
    setCheckedOut(true)
    const response = await checkout()
    setCheckedOut(false)
  }
  return (
    <div>
      <div className="cart-list-summary-container">
        <p className="cart-list-summary-title">Price Details</p>
        <hr />
        <div className="cart-list-summary-items-price-container">
          <p className="cart-list-summary-items-price">Price ({cartItemsTotal} items)</p>
          <p>₹{cartItemsTotalPrice}</p>
        </div>
        <div className="cart-list-summary-items-price-container">
          <p className="cart-list-summary-items-price">Delivery Fee</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="cart-list-summary-items-price-container">
          <p className="cart-list-summary-items-total">Total Amount</p>
          <p className="cart-list-summary-items-total-price">₹{cartItemsTotalPrice}</p>
        </div>
      </div>
      <div className="checkout-btn-container">
        <button disabled={checkedOut} className="checkout-btn" onClick={handleCheckout}> 
          Proceed To Checkout
        </button>
        {checkedOut && <div className="loader"></div>}
      </div>
    </div>
  )
}