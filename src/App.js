import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Layout from './components/layouts/Layout';
import ProductList from './pages/productsList';
import Product from './pages/product';
import Cart from './pages/cart';

const { Routes, Route } = require('react-router-dom');

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
