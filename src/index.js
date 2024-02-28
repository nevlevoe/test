//importing
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();
//converting into json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setting ejs as view engine 
app.set('view engine', 'ejs');

//static folder path css 
app.use(express.static("SigninandLogin"));

app.get("/", (req,res)=>{
    res.render("login");
});

app.get("/signup", (req,res)=>{
    res.render("signup");
});

//new user data being read in
app.post('/signup', async (req,res) => {
    const data = {
        name: req.body.uname,
        password: req.body.psw
    }
    const userdata = await collection.insertMany(data);
    console.log(userdata);
});

const port = 5000;
app.listen(port, () =>{
    console.log('Server is running on Port: ' + port);
});