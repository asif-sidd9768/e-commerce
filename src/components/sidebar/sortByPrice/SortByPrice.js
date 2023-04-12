import { useContext, useState } from "react"
import "./SortByPrice.css"
import { ProductContext } from "../../../contexts/ProductsContext"

export const SortByPrice = () => {
  const [selected, setSelected] = useState()
  const { sortByPrice } = useContext(ProductContext)
  const handleSort = (event) => {
    sortByPrice(event.target.value)
  }
  return (
    <div className="filter-by-price-container">
        <p className="filter-price-heading">Sort by Price: </p>
        <div>
          <select className="select-dropdown" onChange={handleSort}>
            <option value="default">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
  )
}