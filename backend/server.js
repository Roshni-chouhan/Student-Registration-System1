const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", studentRoutes);

app.get("/", (req, res) => {
    res.send("Student Registration API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});