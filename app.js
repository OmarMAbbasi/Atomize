//Express routing setup
const express = require("express");
const app = express();

const http = require("http");
const serv = http.Server(app);

app.get("/", (req, res) => res.send("Nodemon working"));

const PORT = process.env.PORT || 5000;

serv.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//Mongoose Routing
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("Connected to MongoDB successfully"))
	.catch(err => console.log(err));
