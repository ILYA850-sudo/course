import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <h1><i className="fas fa-user-circle"></i> Мій профіль</h1>
      <div className="profile-card">
        <div className="avatar">
          <i className="fas fa-user"></i>
        </div>
        <div className="profile-info">
          <h2>Іван Петренко</h2>
          <p><i className="fas fa-envelope"></i> ivan@example.com</p>
          <p><i className="fas fa-phone"></i> +380 (99) 123-45-67</p>
        </div>
      </div>
      
      <div className="preferences">
        <h3><i className="fas fa-cog"></i> Налаштування</h3>
        <div className="setting">
          <span>Сповіщення по SMS</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>
        <div className="setting">
          <span>Email-сповіщення</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Profile