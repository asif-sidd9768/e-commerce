export const getProducts = async () => {
  let products
  try{
    const response = await fetch("https://dummyjson.com/products?limit=50")
    const data = await response.json()
    const { products: productsData } = data
    const productsFormatted = productsData.map(({id, title, description, price, thumbnail, images, category}) => ({id, name:title, description, price: price*80, thumbnail, images, category, quantity:1, isItemInCart:false}))
    products = productsFormatted
  }catch(error){
    console.error(error)
  }

  return products
}