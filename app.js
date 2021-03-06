//Express routing setup
const express = require("express");
const app = express();

const http = require("http");
const serv = http.Server(app);

//body parser for JSON
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Nodemon working"));

const PORT = process.env.PORT || 5000;

serv.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//Mongoose Routing
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

if (process.env.NODE_ENV === "production") {
	app.use(express.static("frontend/build"));
	app.get("/", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
	});
}

mongoose
	.connect("mongodb+srv://admin:BWudTBcL7MXBvqXT@cluster0-vdbxb.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => console.log("Connected to MongoDB successfully"))
	.catch(err => console.log(err));

//Mongoose Routes
const teachers = require("./routes/api/teachers");
app.use("/api/teachers", teachers);

const students = require("./routes/api/students");
app.use("/api/students", students);

const courses = require("./routes/api/courses");
app.use("/api/courses", courses);
