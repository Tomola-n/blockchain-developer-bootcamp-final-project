const express = require('express');
const app = express();
const http = require('http').Server(app);
app.use("/", express.static(__dirname + '/'));
app.get('/', (req, res) => { res.redirect("/index.html"); });

http.listen(3000, () => {
    console.log('listen 3000');
});
