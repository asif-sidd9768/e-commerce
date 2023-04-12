import { Link } from "react-router-dom"
import "./ProductCard.css"

export const ProductCard = ({product: {id, name, thumbnail, price}}) => {
  return (
    <div className="product-container">
      <Link to={`/product/${id}`} className="product-link">
        <div>
          <img src={thumbnail} className="product-image" alt="" />
        </div>
        <div className="divider" >
        <hr />
        </div>
        <p className="product-title">{name}</p>
        <p className="product-price">Price: ₹{price}</p>
      </Link>
    </div>
  )
}