var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "public/home.html"))
})

//get toute to servey
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"))
  }); 

app.get("/api/friends", function(req, res){
    return res.json(dbFriends);
  }); 

app.post("/api/friends", function (req, res){
    var data = req.body
    dbFriends.push(data);
    res.end(); 
    //return match :) 
})

var dbFriends = [
    {
        name: "Fredrik", 
        lastname: "gustafson"
    }, 
    {
        name: "niklas", 
        lastname: "Gustafson"
    }
]