import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import GasDeliveryPage from './GasDeliveryPage';
import OrderHistory from './OrderHistory';
import Profile from './Profile';
import Register from './Register'; // Добавьте этот импорт, если есть компонент Register

function App() {
  const location = useLocation();
  
  // Определяем активную ссылку
  const isActive = (path) => location.pathname === path ? 'active' : '';
  
  return (
    <div className="app">
      {/* Шапка с навигацией */}
      <header>
        <nav className="navbar">
          <div className="nav-logo">
            <i className="fas fa-fire"></i>
            <span>GasDelivery</span>
          </div>
          
          <div className="nav-links">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/')}`}
            >
              <i className="fas fa-home"></i> 
              <span>Головна</span>
            </Link>
            
            <Link 
              to="/history" 
              className={`nav-link ${isActive('/history')}`}
            >
              <i className="fas fa-history"></i> 
              <span>Історія</span>
            </Link>
            
            <Link 
              to="/profile" 
              className={`nav-link ${isActive('/profile')}`}
            >
              <i className="fas fa-user"></i> 
              <span>Профіль</span>
            </Link>
            
            {/* Дополнительная ссылка, если нужно */}
            {/* <Link 
              to="/register" 
              className={`nav-link ${isActive('/register')}`}
            >
              <i className="fas fa-user-plus"></i> 
              <span>Реєстрація</span>
            </Link> */}
          </div>
        </nav>
      </header>

      {/* Основное содержимое */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<GasDeliveryPage />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </main>

      {/* Подвал */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2024 GasDelivery. Доставка газу по всьому місту
          </p>
          
          <div className="footer-contacts">
            <a 
              href="tel:+380123456789" 
              className="contact-link"
            >
              <i className="fas fa-phone"></i> 
              <span>0 (800) 123-45-67</span>
            </a>
            
            <a 
              href="mailto:info@gasdelivery.ua" 
              className="contact-link"
            >
              <i className="fas fa-envelope"></i> 
              <span>info@gasdelivery.ua</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;