const router = require("express").Router();

// get all ninjas from db
router.get("/ninjas", (req, res) => {
    res.send({ type: "GET" });
});

// add new ninja to db
router.post("/ninjas", (req, res) => {
    res.send({ type: "POST" });
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
