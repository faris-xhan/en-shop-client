import Home from './pages/home';

const { Routes, Route } = require('react-router-dom');

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
