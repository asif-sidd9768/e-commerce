import { useContext } from "react"
import { CartItemList } from "../../components/cartItemList/CartItemList"
import { CartListSummary } from "../../components/cartListSummary/CartListSummary"
import { Cart as CartOld } from "../Cart"
import "./Cart.css"
import { CartContext } from "../../contexts/CartContext"
import { EmptyCart } from "../../components/emptyCart/EmptyCart"

export const Cart = () => {
  const { cart } = useContext(CartContext)

  if(cart.length === 0){
    return <EmptyCart />
  }
  return (
    <div className="cart-container">
      <div className="cart-item-container">
        <CartItemList />
      </div>
      <div className="cart-item-summ-container">
        <CartListSummary/>
      </div>
    </div>
  )
}