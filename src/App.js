import Layout from './components/layouts/Layout';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

const { Routes, Route } = require('react-router-dom');

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
