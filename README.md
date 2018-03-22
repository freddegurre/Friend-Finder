# Friend-Finder
This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. So that you can become best friends for ever :couple_with_heart:

### What its built with
This application is built with HTML, Bootstrap, CSS, Javascript, Jquery, Node.js and Express.js.
There is no database at the moment but its simulated by storing info as Array  in peopleArray

### How is the friend match done
Each user that wants to find a new BFF has to give their names a url to their image and answer a survey of 9 questions. For each question there is a statement where the user has to agree or dissagre on a scale from **1-5**. 

When the user submits the form the values for each question is compared with other users in the DB and their values for each question. Once it finds a user with the smallest difference for each question it returns that user with name and photo in a popup modal. 

### finding the best match
```javascript
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
```
### Dependencies
                "dependencies": {
                    "body-parser": "^1.18.2",
                    "express": "^4.16.3",
                    "path": "^0.12.7"
                }

###### BY Fredrik Gustafson

:poop:





