import "./EmptyCart.css"

export const EmptyCart = () => {
  return(
    <div className="empty-cart-container">
      <div className="empty-cart-icon"><i class="fas fa-cart-shopping"></i></div>
      <h3 className="empty-cart-text">Empty cart! Add items to view...</h3>
    </div>
  )
}