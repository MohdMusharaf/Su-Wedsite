import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState(''); // State for gender
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:7000/auth/signup', {
        name,
        email,
        password,
        confirmpassword: password,
        gender,
        phoneNumber
      });

      setMessage(response.data.message);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setGender('');
      setPhoneNumber('');
    } catch (err) {
      setError(err.response?.data.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="modal-body">
      <div className="col-md-12">
   
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="signupName">Name</label>
            <input
              type="text"
              className="form-control"
              id="signupName"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signupEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="signupEmail"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signupPhoneNumber">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="signupPhoneNumber"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signupGender">Gender</label>
            <select
              className="form-control"
              id="signupGender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="signupPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="signupPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
         
          <button type="submit" className="btn btn-primary">Signup</button>
        </form>
        {message && <p className="text-success mt-2">{message}</p>}
        {error && <p className="text-danger mt-2">{error}</p>}
      </div>
    </div>
  );
}

export default Signup;

