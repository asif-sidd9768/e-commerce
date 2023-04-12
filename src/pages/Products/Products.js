import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductsContext";

import "./Products.css"
import { Sidebar } from "../../components/sidebar/Sidebar";
import { ProductList } from "../../components/productList/ProductList";

export const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <ProductList />
      </div>
    </div>
  )
}