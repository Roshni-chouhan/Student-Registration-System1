const express = require("express");
const router = express.Router();

const {
    addStudent,
    getStudents
} = require("../controllers/studentcontroller");

router.post("/students", addStudent);

router.get("/students", getStudents);

module.exports = router;