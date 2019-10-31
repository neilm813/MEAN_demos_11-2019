const express = require("express");
const app = express();
const path = require('path');

// app.use(express.static(__dirname + "/static"));
app.use(express.static(path.join(__dirname, "static")));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {

  const users = [
    { name: "Isaac", email: "isaacIsYourBoss@boss.com", interests: ["giving orders", "being the boss"] },

    { name: "Zara", email: "emailZara.com", interests: ["coding", "ripped pants"] },
    { name: "HTML SKELETON", email: "htmlSkeleInDaHouse.com", interests: ["supporting you", "calcium, yum"] }
  ];

  const context = { allUsers: users };
  
  response.render('index', context);
});

app.listen(8000, () => console.log("listening on port 8000"));