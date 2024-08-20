const express = require('express');
const User = require("../modules/users");
const bcrypt = require("bcrypt")
// const { generateToken, verifyToken } = require("../middleware/jwtToken");
const jwt = require("jsonwebtoken")
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { name, email, phoneNumber, gender, password, confirmpassword } = req.body;
    
        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        if (password !== confirmpassword) {
          return res.status(400).json({ message: 'Passwords do not match' });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
      
        const newUser = new User({
          name,
          email,
          phoneNumber,
          gender,
          password: hashedPassword,
          confirmpassword:password
        });
    
        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
      } catch (e) {
        console.log('./signup', e);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    router.post('/login', async (req, res) => {
      try {
          const { email, password } = req.body;
          const user = await User.findOne({ email });
          if (!user) {
              return res.status(404).json({ message: 'User not found' });
          }
      
          const isPasswordValid = await bcrypt.compare(password, user.password);
          
          if (!isPasswordValid) {
              return res.status(400).json({ message: 'Invalid password' });
          }
  
          
          const payload ={
            userId: user._id
          }
          const token =jwt.sign(payload,'JOBS_KEY',{expiresIn:'2HR'})
  
          return res.status(200).json({ message: 'Login successful', token:token ,payload:payload.userId});
      } catch (e) {
          console.log('./login', e);
          res.status(500).json({ message: 'Internal server error' });
      }
  });
  
  

  
  module.exports = router;