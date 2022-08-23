const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")
const newBookController= require("../controllers/newbookController")
const newPublisherController= require("../controllers/newPublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", newAuthorController.createAuthor  )

router.post("/newPublisher", newPublisherController.newPublisher)

router.get("/getAuthorsData", newAuthorController.getAuthorsData)

router.post("/createBook", newBookController.createBook  )

router.post("/getBooksData", newBookController.getBooksData)

router.get("/getBooksWithAuthorDetails", newBookController.getBooksWithAuthorDetails)

module.exports = router;