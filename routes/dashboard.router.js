const express =  require("express");
const router = express.Router()
const jwt = require("jsonwebtoken");

const authorizeJWT = (req, res, next) => {
    // Get the token from the request headers or other location
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
  
    // Verify the token
    jwt.verify(token, "B42A72139CF6F", (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden: Invalid token" });
      }
      req.user = user; // Attach the decoded user information to the request object
      next(); // Continue to the next middleware or route handler
    });
  };

router.get("/",authorizeJWT,(req,res,next) =>{
  console.log("request body =>", req.body)
  console.log("request user =>", req.user)

  // Send the token in the response
  res.status(200).json({ message: "Token verified"});

})




module.exports = router