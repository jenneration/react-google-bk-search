const router = require("express").Router();
const { Book } = require("../models");

router.get("/api/books", (req, res) => {
    Book.find({})
        .then(data => res.json(data))
        .catch(error => res.json(error))
});


router.post("/api/books", (req, res) => {
    Book.create(req.body)
        .then(data => res.json(data))
        .catch(error => res.json(error))
});


router.delete("/api/books/:id", (req, res) => {
    Book.findOneAndDelete({ _id: req.params.id })
        .then(data => res.json(true))
        .catch(error => res.json(error))
})


module.exports = router;