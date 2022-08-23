const mongoose = require('mongoose');

const newauthorSchema = new mongoose.Schema( {
    author_name: String,
    age:Number,
    address:String,
    rating:Number 
    
});

module.exports = mongoose.model('Author', newauthorSchema)
