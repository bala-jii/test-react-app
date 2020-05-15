let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.writeHead(200, 'OK');
    res.send("Hello there, im app 3.");
});

app.listen(3000, ()=> {
    console.log('app is listening in localhost:3000');
})