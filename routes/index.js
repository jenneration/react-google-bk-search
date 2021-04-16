const router = require("express").Router();
const {Book} = require("../models");

router.get ("/api/books", (req, res) => {
    Book.find({})
    .then(data => res.json(data))
    .catch(error => res.json(error))
});



module.exports = router;