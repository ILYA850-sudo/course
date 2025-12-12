import React from 'react'
import './OrderHistory.css'

const OrderHistory = () => {
  const orders = [
    { id: 1, date: '15.03.2024', type: 'Пропан', size: '12 л', quantity: 2, price: 640, status: 'Доставлено' },
    { id: 2, date: '10.03.2024', type: 'Пропан-Бутан', size: '27 л', quantity: 1, price: 612, status: 'Доставлено' },
    { id: 3, date: '05.03.2024', type: 'Бутан', size: '5 л', quantity: 3, price: 630, status: 'Скасовано' },
  ]

  return (
    <div className="order-history">
      <h1><i className="fas fa-history"></i> Історія замовлень</h1>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <span className="order-id">Замовлення №{order.id}</span>
              <span className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            <div className="order-details">
              <div className="detail">
                <span className="label">Дата:</span>
                <span className="value">{order.date}</span>
              </div>
              <div className="detail">
                <span className="label">Тип газу:</span>
                <span className="value">{order.type}</span>
              </div>
              <div className="detail">
                <span className="label">Об'єм:</span>
                <span className="value">{order.size}</span>
              </div>
              <div className="detail">
                <span className="label">Кількість:</span>
                <span className="value">{order.quantity} шт.</span>
              </div>
            </div>
            <div className="order-footer">
              <span className="price">{order.price} грн</span>
              <button className="repeat-btn">
                <i className="fas fa-redo"></i> Повторити замовлення
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderHistory