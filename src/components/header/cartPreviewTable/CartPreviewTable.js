import "./CartPreviewTable.css"

export const CartPreviewTable = ({cart}) => {
  return (
    <table className="cart-details-table">
      <tr>
        <th>Product</th>
        <th></th>
        <th>Total</th>
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