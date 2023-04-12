import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductsContext";
import { Products } from "./Products/Products";

export function ProductList() {
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  return (
    <div>
      <Products />
    </div>
  );
}
