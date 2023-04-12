import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductsContext";

export const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find(({ id }) => id === Number(productId));
  return (
    <div>
      <hr />
      <h1>{product.name}</h1>
      <h3>Price: {product.price}</h3>
      <button
        disabled={product.isItemInCart}
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};
