import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim()) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    axios.post("http://localhost:3000/users", {
      username: username,
      email: email,
      password: password
    })
      .then((res) => {
        alert('Registration successful!');
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage('Registration failed. Please try again.');
      });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:3000/users');
      const userData = response.data.find(user =>
        user.email == email && user.password == password
      );

      if (userData) {
        alert('Login successful!');
        localStorage.setItem('loggedInUser', JSON.stringify({ email, password }));
        navigate("/checkout");
      } else {
        setErrorMessage('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow p-4 rounded">
            {isLoginForm ? (
              <>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  <button onClick={handleLogin} type="submit" className="btn btn-primary w-100 mb-2">Login</button>
                </form>
                <button onClick={handleToggleForm} className="btn btn-link w-100">Switch to Registration</button>
              </>
            ) : (
              <>
                <h2 className="text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  <button type="submit" className="btn btn-primary w-100 mb-2">Register</button>
                </form>
                <button onClick={handleToggleForm} className="btn btn-link w-100">Switch to Login</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
