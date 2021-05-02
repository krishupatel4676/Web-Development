

const express = require("express");

var app = express();

app.get("/", function(request, response){
  response.send('<h1>Hello</h1>');
});

app.get("/contact", function(request, response){
  response.send("contact me at: krishupatel2201@gmail.com");
});

app.get("/about", function(request, response){
  response.send("I am Krishna patel. I am a computer Program graduate. I would love to do coding.");

});

app.get("/hobby", function(request, response){
  response.send("I love coffeee");

});

app.listen(3000, function(){
  console.log("Sever started on port 3000");
});
