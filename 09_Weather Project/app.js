/*
  For this project, you will need to sign up for a free API key from OpenWeatherMap.org.
  Once you create your account, they will send you an email with your API key.
  Then you can go to the API documentation
  and figure out how to make your API call to get the weather data.
*/

// ? To start the server:
// * nodemon app.js
// If no nodemon installed:
// * node app.js

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

// Creating an express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// "/" is the root route, i.e. the home route
app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

// Catching the post request after Go button is pressed
app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "b2058110bc3fe0656ccbc0ceffa0797b";
  const unit = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;

  // Making a get request to the OpenWeatherMap API
  https.get(url, function (response) {
    console.log("statusCode:", response.statusCode); // statusCode: 200 - "OK"

    // Getting the data from the API
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);

      const city = weatherData.name;
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      // Writing the data to the browser
      res.write(`<p>The weather is currently ${description}</p>`);
      res.write(`<h1>The temperature in ${city} is ${temp} degrees C.</h1>`);
      res.write(`<img src=${imageURL}>`);

      res.send(); // Sending the response back to the browser
    });
  });
});

// Starting the server on port 3000
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
