import "./CartPreviewTable.css"

export const CartPreviewTable = ({cart}) => {
  return (
    <table className="cart-details-table">
      <tr>
        <th className="cart-details-table-product-header">Product</th>
        <th></th>
        <th className="cart-details-table-total-header">Total</th>
      </tr>
      {
        cart.map(({id, name, quantity, price}) =>                       
          <tr key={id}>
            <td>{name}</td>
            <td>{quantity} x {price}</td>
            <td>{quantity * price}</td>
          </tr>
        )
      }
    </table>
  )
}