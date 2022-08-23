const newPublisherModel = require("../models/newPublisherModel")

//Write a POST api that creates a publisher from the details in the request body
const newPublisher = async function(req,res){
    let publisher = req.body
    let publisherCreated = await newPublisherModel.create(publisher)
    res.send({data: publisherCreated})
}
module.exports.newPublisher = newPublisher