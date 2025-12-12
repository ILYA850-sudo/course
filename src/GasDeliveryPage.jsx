import React, { useState } from 'react'
import './GasDeliveryPage.css'

const GasDeliveryPage = () => {
  const [gasType, setGasType] = useState('propane')
  const [cylinderSize, setCylinderSize] = useState('12')
  const [quantity, setQuantity] = useState(1)
  const [address, setAddress] = useState('')
  const [deliveryTime, setDeliveryTime] = useState('asap')
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [orderNotes, setOrderNotes] = useState('')
  const [isOrdered, setIsOrdered] = useState(false)

  const gasTypes = [
    { id: 'propane', name: 'Пропан', price: 320, color: '#4CAF50' },
    { id: 'butane', name: 'Бутан', price: 300, color: '#2196F3' },
    { id: 'mix', name: 'Пропан-Бутан', price: 340, color: '#FF9800' },
  ]

  const cylinderSizes = [
    { size: '5', weight: '11 кг', priceMultiplier: 0.7 },
    { size: '12', weight: '27 кг', priceMultiplier: 1 },
    { size: '27', weight: '50 кг', priceMultiplier: 1.8 },
    { size: '50', weight: '100 кг', priceMultiplier: 2.5 },
  ]

  const deliveryTimes = [
    { id: 'asap', label: 'Якнайшвидше', icon: 'fa-bolt' },
    { id: 'today', label: 'Сьогодні', icon: 'fa-calendar-day' },
    { id: 'tomorrow', label: 'Завтра', icon: 'fa-calendar-alt' },
  ]

  const selectedGas = gasTypes.find(g => g.id === gasType)
  const selectedCylinder = cylinderSizes.find(c => c.size === cylinderSize)
  const totalPrice = (selectedGas.price * selectedCylinder.priceMultiplier * quantity).toFixed(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!address || !contactName || !contactPhone) {
      alert('Будь ласка, заповніть всі обов\'язкові поля')
      return
    }
    
    console.log({
      gasType,
      cylinderSize,
      quantity,
      address,
      deliveryTime,
      contactName,
      contactPhone,
      orderNotes,
      totalPrice
    })
    
    setIsOrdered(true)
    setTimeout(() => setIsOrdered(false), 3000)
  }

  return (
    <div className="gas-delivery-page">
      <header className="page-header">
        <h1><i className="fas fa-gas-pump"></i> Доставка газу</h1>
        <p className="subtitle">Швидка доставка газових балонів по всьому місту</p>
      </header>

      <div className="container">
        <div className="order-card">
          <div className="card-header">
            <h2><i className="fas fa-shopping-cart"></i> Оформлення замовлення</h2>
            <div className="total-price">
              <span>Всього:</span>
              <span className="price">{totalPrice} грн</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3><i className="fas fa-fire"></i> Тип газу</h3>
              <div className="gas-type-selector">
                {gasTypes.map(gas => (
                  <div
                    key={gas.id}
                    className={`gas-type-card ${gasType === gas.id ? 'selected' : ''}`}
                    onClick={() => setGasType(gas.id)}
                    style={{ borderColor: gas.color }}
                  >
                    <div className="gas-icon" style={{ backgroundColor: gas.color }}>
                      <i className="fas fa-flask"></i>
                    </div>
                    <h4>{gas.name}</h4>
                    <p className="gas-price">{gas.price} грн/балон</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-section">
              <h3><i className="fas fa-weight-hanging"></i> Об'єм балона</h3>
              <div className="cylinder-selector">
                {cylinderSizes.map(cylinder => (
                  <button
                    key={cylinder.size}
                    type="button"
                    className={`cylinder-btn ${cylinderSize === cylinder.size ? 'selected' : ''}`}
                    onClick={() => setCylinderSize(cylinder.size)}
                  >
                    <span className="size">{cylinder.size} л</span>
                    <span className="weight">{cylinder.weight}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="form-section">
              <h3><i className="fas fa-box"></i> Кількість</h3>
              <div className="quantity-selector">
                <button 
                  type="button" 
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <div className="qty-display">
                  <span>{quantity}</span>
                  <span>балонів</span>
                </div>
                <button 
                  type="button" 
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>

            <div className="form-section">
              <h3><i className="fas fa-map-marker-alt"></i> Адреса доставки</h3>
              <input
                type="text"
                className="address-input"
                placeholder="Вулиця, будинок, квартира"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-section">
              <h3><i className="fas fa-clock"></i> Час доставки</h3>
              <div className="time-selector">
                {deliveryTimes.map(time => (
                  <label key={time.id} className="time-option">
                    <input
                      type="radio"
                      name="deliveryTime"
                      value={time.id}
                      checked={deliveryTime === time.id}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                    />
                    <div className="time-card">
                      <i className={`fas ${time.icon}`}></i>
                      <span>{time.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-section">
              <h3><i className="fas fa-user"></i> Контактні дані</h3>
              <div className="contact-fields">
                <input
                  type="text"
                  placeholder="Ваше ім'я"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Номер телефону"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3><i className="fas fa-sticky-note"></i> Примітки до замовлення</h3>
              <textarea
                placeholder="Додаткові побажання, поверх, код домофона..."
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                rows="3"
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isOrdered}>
              {isOrdered ? (
                <>
                  <i className="fas fa-check"></i> Замовлення оформлено!
                </>
              ) : (
                <>
                  <i className="fas fa-truck"></i> Замовити доставку за {totalPrice} грн
                </>
              )}
            </button>
          </form>
        </div>

        <div className="info-sidebar">
          <div className="info-card">
            <h3><i className="fas fa-info-circle"></i> Важлива інформація</h3>
            <ul className="info-list">
              <li><i className="fas fa-shield-alt"></i> Усі балони проходять перевірку</li>
              <li><i className="fas fa-clock"></i> Доставка протягом 2-х годин</li>
              <li><i className="fas fa-sync-alt"></i> Обмін порожніх балонів</li>
              <li><i className="fas fa-credit-card"></i> Оплата при отриманні</li>
            </ul>
          </div>

          <div className="stats-card">
            <h3><i className="fas fa-chart-line"></i> Статистика сьогодні</h3>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-value">47</span>
                <span className="stat-label">Замовлень</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">98%</span>
                <span className="stat-label">Успішних</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">1.2 год</span>
                <span className="stat-label">Середній час</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GasDeliveryPage