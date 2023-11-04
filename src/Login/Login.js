import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'react' && password === '123456') {
      navigate('/dashboard');
    } else {
      setError('Incorrect username or password');
    }
  };

  const isButtonEnabled = username.length > 0 && password.length > 0;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className='login-inside'>
        <img src="/img/ingress-task-logo.png" alt="logo" />
        <h2>Login</h2>
        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className='password'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            {showPassword ? (
              <AiFillEyeInvisible
                className="eye-icon"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <AiFillEye
                className="eye-icon"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          <button
            onClick={handleLogin}
            style={{ backgroundColor: isButtonEnabled ? 'green' : 'grey' }}
            disabled={!isButtonEnabled}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
