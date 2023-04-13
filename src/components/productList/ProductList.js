import { useContext } from "react"
import { newProducts, products } from "../../products/productsDB"
import { ProductCard } from "../productCard/ProductCard"

import "./ProductList.css"
import { ProductContext } from "../../contexts/ProductsContext"
import { filteredProductsHelper } from "../../utils/filterAndSortHelper"

export const ProductList = () => {
  const { products, filterValue, sortValue, categoryValue } = useContext(ProductContext)
  const filteredProducts = filteredProductsHelper(products, filterValue, sortValue, categoryValue)

  if(products.length === 0){
    return <div className="empty-product-list">
        <div className="loader-main"></div>
      </div>
  }

  if(filteredProducts.length === 0){
    return <div className="empty-product-list">
        <h3 className="empty-product-list-oops">Oops!</h3>
        <p className="empty-product-list-text">No products to show! change your selection...</p>
      </div>
  }

  return (
    <div className="product-list-container">
      {
        filteredProducts.map(product => 
          <ProductCard key={product.id} product={product}/>   
        )
      }
    </div>
  )
}