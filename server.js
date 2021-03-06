var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT =  process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

require("./routing/htmlRoutes.js")(app); 
require("./routing/apiRoutes.js")(app); 

app.get("/style.css", function(req, res){
	res.sendFile(__dirname + "/public/style.css");
});