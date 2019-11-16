const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./server/config/mongoose');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
require('./server/config/routes')(app);

app.listen(3000, 'localhost', () => {
  console.log('listening on port 3000');
});