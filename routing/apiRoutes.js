var peopleArray = require("../data/friends.js")

module.exports = function (app) {
    
    app.get("/api/friends", function(req, res){
        return res.json(peopleArray);
    }); 

    app.post("/api/friends", function (req, res){
        var newPersonScore = req.body.score.map(Number); 
        var highScore = 999; 
        var newFriend 
     
        for (var i = 0; i < peopleArray.length; i++ ){
            
            var sum = 0;

            for (j = 0; j < peopleArray[i].score.length; j++) {
                sum += Math.abs(newPersonScore[j] - peopleArray[i].score[j]);
            }

            if (sum < highScore) {
                highScore = sum;
                newFriend = peopleArray[i];
            }
        }
        peopleArray.push(req.body)
        res.send(newFriend); 
    });
}