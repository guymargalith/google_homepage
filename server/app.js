const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());

const searchRoute = require("./controllers/search_cont");

app.use("/search", searchRoute);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.post("/", (req, res) => {
	res.status(405).send("Not allowd!");
});

module.exports = app;
