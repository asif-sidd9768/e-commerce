import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductsContext"

export const FilterByCategory = () => {
  const {totalCategories, filterByCategory} = useContext(ProductContext)

  const handleCategory = (event) => {
    filterByCategory(event.target.value)
  }

  return(
    <div className="filter-by-price-container">
      <p className="filter-price-heading">Filter by Category: </p>
      <div>
        <select className="select-dropdown" onChange={handleCategory}>
          {
            ['All', ...totalCategories].map((category, index) => 
              <option key={index} value={category}>{category}</option>
            )
          }
        </select>
      </div>
    </div>
  )
}