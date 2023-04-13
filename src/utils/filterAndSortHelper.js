import { products } from "../products/productsDB"

export const filterByValueHelper = (products, filterValue) => {
  const filtered = (filterValue === "All") ? 
    products : 
    products.filter(({price}) => price > Number(filterValue[0]) && price < Number(filterValue[1]))
  return filtered
}

export const sortByPriceHelper = (products, sortValue) => {
  let sortedProducts
  if(sortValue==="lowToHigh"){
    sortedProducts = [...products].sort((a,b) => a.price-b.price)
  }else if(sortValue==="highToLow") {
    sortedProducts = [...products].sort((a,b) => b.price-a.price)
  }else if(sortValue==="default") {
    sortedProducts = [...products]
  }
  return sortedProducts
}

export const  filterByCategory = (products, categoryValue) => {
  const filtered = categoryValue === "All" ? products : products.filter(({category}) => category === categoryValue)
  return filtered
}

export const filteredProductsHelper = (products, filterValue, sortValue, categoryValue) => {
  let filteredProducts = [...products]
  if(filterValue){
    filteredProducts = filterByValueHelper(products, filterValue)
  }
  if(sortValue){
    filteredProducts = sortByPriceHelper(filteredProducts, sortValue)
  }

  if(categoryValue){
    filteredProducts = filterByCategory(filteredProducts, categoryValue)
  }

  if(!filterValue && !sortValue && !categoryValue){
    filteredProducts = [...products]
  }

  return filteredProducts
}