const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema( {

    author:{
        type: ObjectId,
        ref: "Author"
    }, 
	name:String,
    price:Number,
	ratings:Number,
    publisher:{
        type: ObjectId,
        ref: "newPublisher"
    }
});


module.exports = mongoose.model('newBook', newbookSchema)
