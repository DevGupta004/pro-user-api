const axios = require("axios");

//End point Url
const endpoint = "https://pro-otp-email-api.vercel.app/api/send-otp";

exports.sendOtpEmail = async (email) => {
  try {
    const response = await axios.post(endpoint, { email });
    return response.data; // Return the response data
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send OTP email");
  }
};
