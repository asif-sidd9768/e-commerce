import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductsContext";
import { CartContext } from "../../contexts/CartContext";

import "./ProductDetail.css"
import { ImagesCard } from "../../components/imagesCard/ImagesCard";
import { ProductDetailContent } from "../../components/productDetailContent/ProductDetailContent";

export const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext)

  const product = products.find(({ id }) => id === Number(productId));
  
  if(!product || Object.keys(product).length === 0){
    return <div className="loader"></div>
  }
  return (
    <div className="product-detail-container">
      <div className="images-left-side">
        <ImagesCard images={product.images}/>
      </div>
      <div className="product-detail-divider"></div>
      <div className="details-right-side">
        <ProductDetailContent product={product} />
      </div>
    </div>
  )
}