const express  =  require("express");
const app = express();


require("dotenv").config()
const loginRouter = require('./routes/login.router')
const postRouter = require('./routes/post.router')
const dashboard = require("./routes/dashboard.router")
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/login",loginRouter)
app.use("/dashboard",dashboard)
app.use("/api/v1/posts",postRouter)
const PORT = process.env.PORT || 3000 ;

app.listen(PORT , () =>{
    console.log("Server running .........")
})