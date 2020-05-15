let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send("Hello there, im app 1.");
});

app.listen(3000, ()=> {
    console.log('app is listening in localhost:3000');
})