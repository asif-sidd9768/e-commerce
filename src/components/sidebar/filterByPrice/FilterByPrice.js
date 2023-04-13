import { useContext, useState } from "react"
import "./FilterByPrice.css"
import { ProductContext } from "../../../contexts/ProductsContext"

export const FilterByPrice = () => {
  const { filterByPrice, filterValue } = useContext(ProductContext)
  const [selected, setSelected] = useState("All")

  const handleFilter = (event) => {
    setSelected(event.target.value)
    filterByPrice(event.target.value)
  }

  return (
    <div className="filter-by-price-container">
      <p className="filter-price-heading">Filter by Price: </p>
      <div className="filter-by-price">
        <label>
          <input checked={selected==="All"} value="All" name="price" type="radio" onChange={handleFilter} />
          All
        </label>
      </div>
      <div className="filter-by-price">
        <label>
          <input checked={selected==="0-1000"} value="0-1000" name="price" type="radio" onChange={handleFilter} />
          Below Rs 1000
        </label>
      </div>
      <div className="filter-by-price">
        <label>
          <input checked={selected==="1001-5000"} value="1001-5000" name="price" type="radio" onChange={handleFilter} />
          1001 - 5000
        </label>
      </div>
      <div className="filter-by-price">
        <label>
          <input checked={selected==="5001-15000"} value="5001-15000" name="price" type="radio" onChange={handleFilter} />
          5001 - 15000
        </label>
      </div>
      <div className="filter-by-price">
        <label>
          <input checked={selected==="15001-50000"} value="15001-50000" name="price" type="radio" onChange={handleFilter} />
          15001 - 50000
        </label>
      </div>
      <div className="filter-by-price">
        <label>
          <input checked={selected==="50000-Infinity"} value="50000-Infinity" name="price" type="radio" onChange={handleFilter} />
          Above Rs 50000
        </label>
      </div>
    </div>
  )
}