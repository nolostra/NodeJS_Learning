const express =  require("express");
const router = express.Router()
const jwt = require("jsonwebtoken");

router.post("/",(req,res,next) =>{
  console.log("request body =>", req.body)
    const { name, password } = req.body;

  // Check if name and password are present in the request body
  if (!name || !password) {
    return res.status(400).json({ message: "Bad Request: Missing name or password" });
  }

  // Assuming some authentication logic here (e.g., checking name and password)

  // If authentication is successful, generate a JWT token
  const secretKey = "B42A72139CF6F"; // Replace with your actual secret key

  // Include additional data in the payload
  const payload = {
    name,
    otherData: "someValue", // Add any additional data you want
  };

  // Adjust expiration as needed
  const token = jwt.sign(payload, secretKey, { expiresIn: "15min" });

  // Send the token in the response
  res.status(200).json({ token });

})




module.exports = router