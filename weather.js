const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var cityCountry = req.body.cityCountry;
  var options = {
    url: "api.openweathermap.org/data/2.5/weather",
    method: "post",
    qs: {
      q: cityCountry,
      apiid: "c7cfd8926b77f7e419962b086b412cd9",
    },
    // body: JSON.parse(body),
  };

  request(options, (error, response, body) => {
    // var data = JSON.parse(body);
    // var responseJSON = JSON.parse(body);
    // console.log(responseJSON);
    console.log(body);
    console.log(res.statusCode);
  });
  console.log(cityCountry);
});

// API Key
// c7cfd8926b77f7e419962b086b412cd9
