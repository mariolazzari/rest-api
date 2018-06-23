const router = require("express").Router();
const Ninja = require("../models/Ninja");

// get all ninjas from db
router.get("/ninjas", (req, res) => {
    res.send({ type: "GET" });
});

// add new ninja to db
router.post("/ninjas", (req, res) => {
    Ninja.create(req.body)
        .then(ninja => res.send(ninja))
        .catch(err => res.status(422).send({ error: err.message }));
});

// update a ninja in db
router.put("/ninjas/:id", (req, res) => {
    res.send({ type: "PUT" });
});

// delete a ninja from db
router.delete("/ninjas/:id", (req, res) => {
    res.send({ type: "DELETE" });
});

module.exports = router;
