const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Get
app.get("/", function (req, res) {
  res.render("home");
});

// Post
app.post("/", function (req, res) {
  const pokeName = req.body.pokeName;

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const pokeAbilities = JSON.parse(data);
      console.log(pokeAbilities);
    });
  });
});

app.listen(3000, function (req, res) {
  console.log("Successfully started on port 3000");
});
