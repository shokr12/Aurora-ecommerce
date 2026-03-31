import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Moon, Sun } from 'lucide-react';
import { AppProvider, AppContext } from './context/AppContext';
import Home from './pages/Home';
import Products from './pages/Products';
import Story from './pages/Story';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';

const Navbar = () => {
  const { cartCount, theme, toggleTheme } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>AURORA.</div>
      <div className="nav-links">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/products" className={({isActive}) => isActive ? "active" : ""}>Collection</NavLink>
        <NavLink to="/story" className={({isActive}) => isActive ? "active" : ""}>Our Story</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={toggleTheme} className="btn-icon" aria-label="Toggle Theme">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <button className="btn btn-primary" onClick={() => navigate('/cart')} style={{padding: '0.6rem 1.2rem', fontSize: '0.9rem'}}>
          <ShoppingBag size={18} /> {cartCount}
        </button>
      </div>
    </nav>
  );
};

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
