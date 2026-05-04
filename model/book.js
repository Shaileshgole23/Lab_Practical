const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    Textitle:{String,trim:true,required:true},
    Author:{String,trim:true,required:true},
    genre:{String,trim:true},
    published:{String},
    rating:{Number},
    review:{String}
});

const Book = mongoose.model('Book',bookSchema);
module.exports("Book");


