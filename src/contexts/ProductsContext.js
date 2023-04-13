import { createContext, useEffect, useState } from "react";
import { products as productsData } from "../products/productsDB";
import { getProducts } from "../services/fetchProducts";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("")

  const addedToCart = (itemId) => {
    const updatedProductList = products.map((item) =>
      item.id === itemId ? { ...item, isItemInCart: true } : item
    );
    setProducts(updatedProductList);
  };

  const removedFromCart = (itemId) => {
    const updatedProductList = products.map((item) =>
      item.id === itemId ? { ...item, isItemInCart: false } : item
    );
    setProducts(updatedProductList)
  }

  const totalCategories = products.reduce((acc, curr) => {
      acc.includes(curr.category) ? acc : (acc = [...acc, curr.category])
      return acc
    }, [])
  

  const filterByPrice = (price) => {
    if (price === "All") {
      setFilterValue("All");
    } else {
      const filterPrices = price.split("-");
      setFilterValue(filterPrices);
    }
  };

  const sortByPrice = (sortOrder) => {
    console.log(sortOrder);
    setSortValue(sortOrder);
  };

  const filterByCategory = (category) => {
    setCategoryValue(category)
  }

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await getProducts()
      setProducts(productsData)
    }
    loadProducts()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        addedToCart,
        filterValue,
        filterByPrice,
        sortByPrice,
        sortValue,
        totalCategories,
        filterByCategory,
        categoryValue,
        removedFromCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
