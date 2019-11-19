const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    rating: Number,
    desc: String
});

const CakeSchema = new mongoose.Schema({
    baker: String,
    img: String,
    reviews: [ReviewSchema] // quick and lazy one to many
});


mongoose.model('Cake', CakeSchema);
mongoose.model('Review', ReviewSchema);