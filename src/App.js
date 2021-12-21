import Layout from './components/layouts/Layout';
import Home from './pages/home';

const { Routes, Route } = require('react-router-dom');

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
