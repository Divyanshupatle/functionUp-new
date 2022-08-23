const newauthorModel= require("../models/newAuthorModel")

//1. Write a POST api that creates an author from the details in request body
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newauthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await newauthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData