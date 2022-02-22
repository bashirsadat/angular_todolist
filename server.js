const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/first-angualr-app'));
app.get('/*', (req,res) =>
    res.sendFile('index.html', {root:'dist/first-angualr-app'}),);
app.listen(process.env.PORT || 8080);