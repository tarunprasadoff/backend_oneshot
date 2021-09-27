var express = require("express");
var router = express.Router();
var College = require("../models/model");
var Student = require("../models/model");

router.get("/collegeId/:id", function (req, res, next) {
    console.log("Entered")
    College.findOne({ _id: req.params.id }).then(function (college) {
      res.send(college);
  });

});

router.get("/collegeName/:name", function (req, res, next) {
  College.findOne({ _name: req.params.name }).then(function (college) {
    res.send(college);
});

});

router.get("/student/:id", function (req, res, next) {
  Student.findOne({ _id: req.params.id }).then(function (student) {
    res.send(student);
});

});

// router.post("/ninjas", function (req, res, next) {
//   Ninja.create(req.body)
//     .then(function (ninja) {
//       res.send(ninja);
//     })
//     .catch(next);
// });


module.exports = router;
