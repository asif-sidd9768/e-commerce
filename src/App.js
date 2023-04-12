import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Cart } from "./pages/cart/Cart";
import { ProductDetail } from "./pages/productDetail/ProductDetail";
import { ProductList } from "./pages/ProductList";
import { products } from "./products/productsDB";
import { Notification } from "./components/notification/Notification";
import { useContext } from "react";
import { NotificationContext } from "./contexts/NotificationContext";

export default function App() {
  const { triggered, notificationData } = useContext(NotificationContext)
  console.log('notification === ', triggered)
  return (
    <div className="App">
      <Header />
      {triggered && <Notification typeOfNotification={notificationData.type} content={notificationData.content} />}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
