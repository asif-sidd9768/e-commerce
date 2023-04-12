import "./Sidebar.css"
import { FilterByCategory } from "./filterByCategory/FilterByCategory"
import { FilterByPrice } from "./filterByPrice/FilterByPrice"
import { SortByPrice } from "./sortByPrice/SortByPrice"

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <FilterByPrice />
      <SortByPrice />
      <FilterByCategory />
    </div>
  )
}