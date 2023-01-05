const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

app.set("view engine",'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//mongoose.connect("mongodb://127.0.0.1:27017/chatApplication", { useNewUrlParser: true });

app.get("/",function(req,res){
    res.render('login_sinup');
});

app.post("/",function(req,res){
  
  const username = req.body.username;
  const password = req.body.password;





});

app.get("/forgotPassword",function(req,res){
res.render('forgetPassword.ejs');


})

app.post("/forgotPassword",function(req,res){
console.log(req.body);

});


app.listen(3000, function () {
  console.log("Server started on port Successfully 3000.");
});
