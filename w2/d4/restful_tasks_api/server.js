const express = require('express');

const app = express();

app.use(express.json()); // enables json to be received

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(3000, 'localhost', _ => console.log("listening on port 3000"));