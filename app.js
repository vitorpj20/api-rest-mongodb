const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv/config")


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

//Import routes
const postsRoute = require("./routes/posts")

app.use("/posts",postsRoute)

//Routes
app.get("/",(req,res)=>{
    res.send("We are on home")
})



//DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true},()=>{console.log("Conectado no DB")})
//Port
app.listen(3003)