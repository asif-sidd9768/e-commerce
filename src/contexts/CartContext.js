import { createContext, useContext, useState } from "react";
import { ProductContext } from "./ProductsContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { addedToCart, removedFromCart } = useContext(ProductContext);
  const [cart, setCart] = useState([]);

  const addToCart = (itemToAdd) => {
    const updatedItems = addOrUpdateProduct(itemToAdd, cart);
    setCart(updatedItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedItems = cart.map((item) =>
      item.id === itemId ? (item.quantity - 1) < 1 ? item : { ...item, quantity: (item.quantity -= 1) } : item
    );
    setCart(updatedItems);
  };

  const increaseQuantity = (itemId) => {
    const updatedItems = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: (item.quantity += 1) } : item
    );
    setCart(updatedItems);
  };

  const addOrUpdateProduct = (itemToAdd) => {
    console.log(cart);
    const updatedItems = cart.find(({ id }) => id === itemToAdd.id)
      ? cart.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: (item.quantity += 1) }
            : item
        )
      : [...cart, { ...itemToAdd, isItemInCart:true }];

    addedToCart(itemToAdd.id);
    return updatedItems;
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cart.filter(({id}) => id !== itemId)
    removedFromCart(itemId)
    setCart(updatedCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        removeItemFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
