import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { CartContext, CartProvider } from "./contexts/CartContext";
import { ProductContext, ProductProvider } from "./contexts/ProductsContext";
import App from "./App";
import { NotificationContext, NotificationProvider } from "./contexts/NotificationContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { CartContext };
export { ProductContext };
export { NotificationContext }

root.render(
  <StrictMode>
    <Router>
      <NotificationProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </NotificationProvider>
    </Router>
  </StrictMode>
);
