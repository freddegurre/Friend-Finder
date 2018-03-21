var peopleArray = require("../data/friends.js")

module.exports = function (app) {
    
    app.get("/api/friends", function(req, res){
        return res.json(peopleArray);
    }); 

    app.post("/api/friends", function (req, res){
        var data = req.body
        //get the new persons array of score and convert into int.
        var newPersonScore = data.score.map(Number);
        //function for adding two nnumbers
        add = (a, b) =>
        a + b
        newPersonScore = newPersonScore.reduce(add)
        console.log(newPersonScore); 
        peopleArray.push(data);
        for (var i = 0; i < peopleArray.length - 1; i++){
            var totScore = peopleArray[i].score.map(Number);
            totScore = totScore.reduce(add);
            console.log(totScore); 
        }
       
        res.end(); 
        
    });
}