const newauthorModel = require("../models/newAuthorModel")
const newbookModel= require("../models/newbookModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await newbookModel.create(book)
    
    res.send({data: bookCreated})
}

//. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body.

//The authorId is present in the request body. If absent send an error message that this detail is required
const getBooksData= async function (req, res) {
    let bookdata = req.body
    if((!(bookdata.author)) || (!(bookdata.publisher))){
        return res.send({status:false,msg:"this detail is required"})
    }
    let specificBook = await newbookModel.create(bookdata)
    res.send({data: specificBook})

}
//If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await newbookModel.find().populate('author publisher')
    res.send({data: specificBook})

}
   

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
