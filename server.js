const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello, Express!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: viplavg1999@gmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is Viplav Gupta.I am a Computer Science Student at BIT, Meerut.");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Binge Watching</li><li>Cricket</li><li>Listening to music</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
