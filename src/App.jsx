import Register from './Register';
<Routes>
  <Route path="/" element={<GasDeliveryPage />} />
  <Route path="/history" element={<OrderHistory />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/register" element={<Register />} /> {/* Добавь эту строку */}
</Routes>
import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import GasDeliveryPage from './GasDeliveryPage'
import OrderHistory from './OrderHistory'
import Profile from './Profile'

function App() {
  const location = useLocation()
  
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-logo">
          <i className="fas fa-fire"></i>
          <span>GasDelivery</span>
        </div>
        <div className="nav-links">
          <div className="nav-links">
  <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Головна</Link>
  <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>Реєстрація</Link>
  <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Профіль</Link>
</div>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <i className="fas fa-home"></i> Головна
          </Link>
          <Link to="/history" className={location.pathname === '/history' ? 'active' : ''}>
            <i className="fas fa-history"></i> Історія
          </Link>
          <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
            <i className="fas fa-user"></i> Профіль
          </Link>
        </div>
      </nav>
 
      <Routes>
        <Route path="/" element={<GasDeliveryPage />} />
        <Route path="/history" element={<OrderHistory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <footer className="footer">
        <p>© 2024 GasDelivery. Доставка газу по всьому місту</p>
        <div className="footer-contacts">
          <a href="tel:+380123456789"><i className="fas fa-phone"></i> 0 (800) 123-45-67</a>
          <a href="mailto:info@gasdelivery.ua"><i className="fas fa-envelope"></i> info@gasdelivery.ua</a>
        </div>
      </footer>
    </div>
  )
}

export default App