import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Не забудь создать файл стилей

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Получаем текущих пользователей из localStorage или создаем пустой массив
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Проверяем, существует ли уже такой пользователь
    if (users.find(u => u.email === email)) {
      alert('Пользователь с таким email уже существует');
      return;
    }

    // Добавляем нового пользователя
    const newUser = { email, password };
    users.push(newUser);
    
    // Сохраняем обновленный список в localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Регистрация успешна!');
    navigate('/profile'); // Перенаправляем в профиль
  };

  return (
    <div className="register-container">
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Пароль" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Register;