import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import './Login.css';

const Login = ({ onClose, onLoginSuccess }) => {
  const [currentView, setCurrentView] = useState('login'); // 'login', 'register', 'forgot'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [forgotForm, setForgotForm] = useState({
    email: ''
  });

  // Form validation
  const [errors, setErrors] = useState({});

  // Clear message after 5 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ type: '', text: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateForm = (formType) => {
    const newErrors = {};

    if (formType === 'login') {
      if (!loginForm.email) newErrors.email = 'Email is required';
      else if (!validateEmail(loginForm.email)) newErrors.email = 'Invalid email format';
      
      if (!loginForm.password) newErrors.password = 'Password is required';
    }

    if (formType === 'register') {
      if (!registerForm.firstName) newErrors.firstName = 'First name is required';
      if (!registerForm.lastName) newErrors.lastName = 'Last name is required';
      
      if (!registerForm.email) newErrors.email = 'Email is required';
      else if (!validateEmail(registerForm.email)) newErrors.email = 'Invalid email format';
      
      if (!registerForm.password) newErrors.password = 'Password is required';
      else if (!validatePassword(registerForm.password)) newErrors.password = 'Password must be at least 6 characters';
      
      if (!registerForm.confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
      else if (registerForm.password !== registerForm.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
      
      if (!registerForm.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    if (formType === 'forgot') {
      if (!forgotForm.email) newErrors.email = 'Email is required';
      else if (!validateEmail(forgotForm.email)) newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submissions
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm('login')) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock login logic - check against stored users
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const user = users.find(u => u.email === loginForm.email && u.password === loginForm.password);
      
      if (user) {
        // Store login session
        const loginData = {
          user: { ...user, password: undefined }, // Don't store password
          loginTime: new Date().toISOString(),
          rememberMe: loginForm.rememberMe
        };
        
        if (loginForm.rememberMe) {
          localStorage.setItem('userSession', JSON.stringify(loginData));
        } else {
          sessionStorage.setItem('userSession', JSON.stringify(loginData));
        }

        setMessage({ type: 'success', text: 'Login successful!' });
        setTimeout(() => {
          onLoginSuccess && onLoginSuccess(loginData.user);
          onClose && onClose();
        }, 1500);
      } else {
        setMessage({ type: 'error', text: 'Invalid email or password' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Login failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm('register')) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if email already exists
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      if (users.find(u => u.email === registerForm.email)) {
        setMessage({ type: 'error', text: 'Email already registered' });
        setLoading(false);
        return;
      }

      // Add new user
      const newUser = {
        id: Date.now(),
        firstName: registerForm.firstName,
        lastName: registerForm.lastName,
        email: registerForm.email,
        password: registerForm.password,
        registeredAt: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(users));

      setMessage({ type: 'success', text: 'Registration successful! You can now login.' });
      setTimeout(() => setCurrentView('login'), 2000);
    } catch (error) {
      setMessage({ type: 'error', text: 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!validateForm('forgot')) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if email exists
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const user = users.find(u => u.email === forgotForm.email);
      
      if (user) {
        setMessage({ type: 'success', text: 'Password reset link sent to your email!' });
        setTimeout(() => setCurrentView('login'), 2000);
      } else {
        setMessage({ type: 'error', text: 'Email not found in our records' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to send reset email. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (form, field, value) => {
    if (form === 'login') {
      setLoginForm(prev => ({ ...prev, [field]: value }));
    } else if (form === 'register') {
      setRegisterForm(prev => ({ ...prev, [field]: value }));
    } else if (form === 'forgot') {
      setForgotForm(prev => ({ ...prev, [field]: value }));
    }
    
    // Clear specific error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <button className="close-btn" onClick={onClose}>×</button>
        
        {/* Header */}
        <div className="login-header">
          {currentView !== 'login' && (
            <button className="back-btn" onClick={() => setCurrentView('login')}>
              <ArrowLeft size={20} />
            </button>
          )}
          <h2>
            {currentView === 'login' && 'Welcome Back'}
            {currentView === 'register' && 'Create Account'}
            {currentView === 'forgot' && 'Reset Password'}
          </h2>
          <p>
            {currentView === 'login' && 'Sign in to your account'}
            {currentView === 'register' && 'Join our community today'}
            {currentView === 'forgot' && 'Enter your email to reset password'}
          </p>
        </div>

        {/* Message Display */}
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
            {message.text}
          </div>
        )}

        {/* Login Form */}
        {currentView === 'login' && (
          <form onSubmit={handleLogin} className="auth-form">
            <div className="input-group">
              <div className="input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  type="email"
                  placeholder="Email address"
                  value={loginForm.email}
                  onChange={(e) => handleInputChange('login', 'email', e.target.value)}
                  className={errors.email ? 'error' : ''}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={(e) => handleInputChange('login', 'password', e.target.value)}
                  className={errors.password ? 'error' : ''}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={loginForm.rememberMe}
                  onChange={(e) => handleInputChange('login', 'rememberMe', e.target.checked)}
                />
                Remember me
              </label>
              <button
                type="button"
                className="link-btn"
                onClick={() => setCurrentView('forgot')}
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            <div className="form-footer">
              <span>Don't have an account?</span>
              <button
                type="button"
                className="link-btn"
                onClick={() => setCurrentView('register')}
              >
                Sign up
              </button>
            </div>
          </form>
        )}

        {/* Register Form */}
        {currentView === 'register' && (
          <form onSubmit={handleRegister} className="auth-form">
            <div className="name-row">
              <div className="input-group">
                <div className="input-wrapper">
                  <User className="input-icon" size={18} />
                  <input
                    type="text"
                    placeholder="First name"
                    value={registerForm.firstName}
                    onChange={(e) => handleInputChange('register', 'firstName', e.target.value)}
                    className={errors.firstName ? 'error' : ''}
                  />
                </div>
                {errors.firstName && <span className="error-text">{errors.firstName}</span>}
              </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <User className="input-icon" size={18} />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={registerForm.lastName}
                    onChange={(e) => handleInputChange('register', 'lastName', e.target.value)}
                    className={errors.lastName ? 'error' : ''}
                  />
                </div>
                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  type="email"
                  placeholder="Email address"
                  value={registerForm.email}
                  onChange={(e) => handleInputChange('register', 'email', e.target.value)}
                  className={errors.email ? 'error' : ''}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={registerForm.password}
                  onChange={(e) => handleInputChange('register', 'password', e.target.value)}
                  className={errors.password ? 'error' : ''}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm password"
                  value={registerForm.confirmPassword}
                  onChange={(e) => handleInputChange('register', 'confirmPassword', e.target.value)}
                  className={errors.confirmPassword ? 'error' : ''}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={registerForm.agreeTerms}
                  onChange={(e) => handleInputChange('register', 'agreeTerms', e.target.checked)}
                />
                I agree to the <span className="link-text">Terms and Conditions</span>
              </label>
              {errors.agreeTerms && <span className="error-text">{errors.agreeTerms}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
        )}

        {/* Forgot Password Form */}
        {currentView === 'forgot' && (
          <form onSubmit={handleForgotPassword} className="auth-form">
            <div className="input-group">
              <div className="input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  type="email"
                  placeholder="Email address"
                  value={forgotForm.email}
                  onChange={(e) => handleInputChange('forgot', 'email', e.target.value)}
                  className={errors.email ? 'error' : ''}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;