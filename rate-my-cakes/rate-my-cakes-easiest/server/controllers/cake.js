const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Review = mongoose.model('Review');

module.exports = {
    index: (req, res) => {
        Cake.find()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    create: (req, res) => {
        Cake.create(req.body)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    findOne: (req, res) => {
        Cake.findOne({_id: req.params.id})
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    addReview: (req, res) => {
        Cake.findOne({_id: req.params.id})
            .then((cake) => {
                let newReview = new Review(req.body); // create review
                cake.reviews.push(newReview);         // push review
                cake.save()                           // save review
                    .then((data) => {
                        res.json(data);
                    })
                    .catch((err) => {
                        res.json(err);
                    })
            })
            .catch((err) => {
                res.json(err);
            })
    }
}