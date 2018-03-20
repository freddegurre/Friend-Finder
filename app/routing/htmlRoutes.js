
app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "home.html"))
})

//get toute to servey
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"))
  }); 


