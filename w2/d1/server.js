const path = require('path');
const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/mongoose_demo', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const DojoSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

// register the model with mongoose, tie the model
// to it's schema to enforce the schema's structure
const Dojo = mongoose.model('Dojo', DojoSchema);



// req param is unused, we can replace it with an _ to signify it is unused
// when .then is executed it is passed the returned data
app.get('/', (req, res) => {
  
  Dojo.find()
    .then(allDojos => res.render('index', { dojos: allDojos }))
    .catch(err => {
      console.log(err);

      res.render('index', { dojos: [] })
    });
});

// req.body is the info from the form inputs
// .then is not needed here because we just want to
// redirect to index no matter what
// finally runs whether there is an error or not
app.post('/dojos', (req, res) => {

  Dojo.create(req.body)
    .catch(err => console.log(err))
    .finally(() => res.redirect('/'));
});

app.listen(3000, () => console.log('listening on port 3000'));