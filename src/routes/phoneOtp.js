// phoneOtp.js (your route file)

const express = require('express');
const {sendSMS}=require("../controllers/phoneOtp");

const phoneOtpRoute = express.Router();

phoneOtpRoute.post('/send-otp', async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    console.log(phoneNumber)
    // const otp = generateOTP(); // Implement your OTP generation logic
    
    const message = `Your OTP is: ${1234}`;
    console.log(message)
    const response = await sendSMS(message, phoneNumber);

    console.log('SMS sent:', response);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) { 
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'An error occurred while sending OTP' });
  }
});

module.exports = phoneOtpRoute;
