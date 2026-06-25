const db = require("../database");

// Add Student
const addStudent = (req, res) => {
    const {
        name,
        enrollment_number,
        email,
        mobile_number,
        branch
    } = req.body;

    const sql = `
        INSERT INTO students
        (name, enrollment_number, email, mobile_number, branch)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, enrollment_number, email, mobile_number, branch],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Error adding student"
                });
            }

            res.status(201).json({
                message: "Student added successfully"
            });
        }
    );
};

// Get All Students
const getStudents = (req, res) => {
    const sql = "SELECT * FROM students";

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error fetching students"
            });
        }

        res.status(200).json(result);
    });
};

module.exports = {
    addStudent,
    getStudents
};