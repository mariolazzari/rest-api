const router = require("express").Router();
const Ninja = require("../models/Ninja");

// get all ninjas from db
router.get("/ninjas", (req, res) => {
    const { lng, lat } = req.query;
    Ninja.aggregate([
        {
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: [parseFloat(lng), parseFloat(lat)]
                },
                spherical: true,
                distanceField: "dist",
                maxDistance: 200000
            }
        }
    ])
        .then(ninjas => res.send(ninjas))
        .catch(err => res.status(404).send({ error: err.message }));
});

// add new ninja to db
router.post("/ninjas", (req, res) => {
    Ninja.create(req.body)
        .then(ninja => res.send(ninja))
        .catch(err => res.status(422).send({ error: err.message }));
});

// update a ninja in db
router.put("/ninjas/:id", (req, res) => {
    console.log(req.body);

    Ninja.findByIdAndUpdate(req.params.id, req.body)
        .then(ninja => {
            Ninja.findOne({ _id: req.params.id }).then(ninja =>
                res.send(ninja)
            );
        })
        .catch(err =>
            res.status(404).send({
                error: err.message
            })
        );
});

// delete a ninja from db
router.delete("/ninjas/:id", (req, res) => {
    Ninja.findByIdAndRemove(req.params.id)
        .then(ninja => res.send(ninja))
        .catch(err =>
            res.status(404).send({
                error: err.message
            })
        );
});

module.exports = router;
