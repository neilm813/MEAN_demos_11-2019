const path = require('path');
const express = require('express');

const app = express();

app.use(express.json()); // enables json to be received

require('./server/config/mongoose');
require('./server/config/routes')(app);
app.use(express.static(path.join(__dirname, 'public/dist/public')));

// after all the above routes are checked, if none are matched
// redirect back to angular
app.all('*', (req, res) => res.sendFile(
  path.join(__dirname, 'public', 'dist', 'public', 'index.html')
));

app.listen(3000, 'localhost', _ => console.log("listening on port 3000"));