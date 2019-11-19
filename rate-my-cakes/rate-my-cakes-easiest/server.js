const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/dist/client')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8005, () => {
    console.log("Rate my Cakes on port 8005");
})