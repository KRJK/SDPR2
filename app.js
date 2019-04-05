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

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/submitTransaction', urlencodedParser, function (req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    res.writeHead(200);
    console.dir(req.body);
    return res.end();
});

app.listen(port, () => console.log(`Server SDPR2 listening on port ${port}!`));
