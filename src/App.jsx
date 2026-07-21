import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import ProtectedLayout from './pages/seller/ProtectedLayout';
import SellerDashboard from './pages/seller/Dashboard';
import SellerProducts from './pages/seller/Products';
import SellerAddProduct from './pages/seller/AddProduct';
import SellerCategories from './pages/seller/Categories';
import SellerProfile from './pages/seller/Profile';
import SellerOrders from './pages/seller/Orders';
import SellerSettings from './pages/seller/Settings';
import SellerLogin from './pages/seller/Login';
import SellerRegister from './pages/seller/Register';
import SellerForgotPassword from './pages/seller/ForgotPassword';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="seller/login" element={<SellerLogin />} />
          <Route path="seller/register" element={<SellerRegister />} />
          <Route path="seller/forgot" element={<SellerForgotPassword />} />

          <Route path="seller" element={<ProtectedLayout />}>
            <Route index element={<SellerDashboard />} />
            <Route path="products" element={<SellerProducts />} />
            <Route path="add-product" element={<SellerAddProduct />} />
            <Route path="categories" element={<SellerCategories />} />
            <Route path="profile" element={<SellerProfile />} />
            <Route path="orders" element={<SellerOrders />} />
            <Route path="settings" element={<SellerSettings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
