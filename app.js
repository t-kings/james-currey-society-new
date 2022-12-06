const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + ("/index.html"));
});


app.get("/application", function(req, res){
  res.render("application");
});

app.get("/membership", function(req, res){
  res.render("membership");
});


app.get("/about", function(req, res){
  res.render("about");
});


app.get("/ikhideIkheloaNews", function(req, res){
  res.render("ikhideIkheloaNews");
});

app.get("/literaryFestivalNews", function(req, res){
  res.render("literaryFestivalNews");
});

app.get("/pdfFile", function(req, res){
  res.render("pdfFile");
});

app.get("/jamesCurreySociety", function(req, res){
  res.render("jamesCurreySociety");
});

app.get("/applicationNext", function(req, res){
  res.render("applicationNext");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
});
