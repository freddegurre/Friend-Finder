var peopleArray = require("../data/friends.js")

module.exports = function (app) {
    
    app.get("/api/friends", function(req, res){
        return res.json(peopleArray);
    }); 

    app.post("/api/friends", function (req, res){
        var newPersonScore = req.body.score.map(Number); 
        var highScore = 999; 
        var newFriend 
        console.log(peopleArray[0].score); 
        for (var i = 0; peopleArray.length; i++ ){
            var sum = 0; 
            for (j = 0; j < peopleArray[i].score.length; j++) {
                sum += Math.abs(newPersonScore[j] - peopleArray[i].score[j]);
            }
            if (sum < highScore) {
                highScore = sum;
                newFriend = peopleArray[i];
            }
        }
       
        //var peopleArrayScoreInt = []; 
        
        //peopleArray.push(req.body);
        /*for (var i = 0; i < peopleArray.length; i++){
          peopleArrayScoreInt.push(peopleArray[i].score.map(Number))
        }

        var highScore = 999; 
        var newFriend 
        for (var j =0; peopleArrayScoreInt.length; j++){
            var sum = 0; 
            for (var k = 0; k < peopleArrayScoreInt[j].length; k++) {
                sum += Math.abs(newPersonScore[k] - peopleArrayScoreInt[k]);
            }
            if (sum < highScore) {
                highScore = sum; 
                newFriend = peopleArray[i]
            }

        }*/

        res.send(newFriend); 
    });
}