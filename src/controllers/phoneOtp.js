// fast2sms.js

const fast2sms = require('fast2sms');

const options = "TjgQiPCnrGdxtF72OkIYJMDRU1p6VLKaZeAyNhc3fBuqSH98lvmAKcyT4e8U2rv3j0owZhX7H5aft9DL";
fast2sms.init(options);

const sendSMS=async(message, phoneNumber)=> {
  try {
    const response = await fast2sms.send({
      message,
      to: phoneNumber,
    });
    return response;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
}

module.exports = { sendSMS };
