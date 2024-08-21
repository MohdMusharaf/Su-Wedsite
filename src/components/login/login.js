import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // State to store username
  const [error, setError] = useState(''); // State to store error messages
  const [message, setMessage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:7000/auth/login', { email, password });
      // Handle success
      setUsername(response.data.message); 
      setError(''); 
      setMessage(' ')
      console.log('Login successful:', response.data);
    } catch (error) {
      
      setUsername(''); 
      setError(error.response?.data.message || 'An unexpected error occurred');
      console.error('Login error:', error.response?.data.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="modal-body">
      <div className="col-md-12">
     
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loginEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        
        
      </div>
      {username && <span>Welcome, {username}!</span>}
    </div>
  );
}

export default Login;
