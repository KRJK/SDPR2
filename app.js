const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.get('/', (req, res) => res.sendFile(__dirname + '/public/home.html'));
app.post('/postTransaction', urlencodedParser, function (req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    res.writeHead(200);
    console.dir(req.body);
    res.write("congratulations, the transaction was succesful!")
    return res.end();
});

app.listen(port, () => console.log(`Server SDPR2 listening on port ${port}!`));
