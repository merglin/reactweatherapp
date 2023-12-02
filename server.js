const express = require("express");
const morgan = require("morgan");
const weatherAPI = require("./api/openWeatherMap");

// create our app
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("combined"));

app.use(function (req, res, next) {
  console.log(req.headers);
  if (req.headers["x-forwarded-proto"] || req.protocol === "http") next();
  else res.redirect("http://" + req.hostname + req.url);
});
app.use("/weather/:location", async function (req, res) {
  const getTemp = async () => await weatherAPI.getTemp(req.params.location);
  var result = await getTemp();
  console.log("Returning: " + result);
  res.json({
    temp: result,
  });
});
app.use(express.static("dist"));
app.all("*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

app.listen(port, function () {
  console.log(`server started on port ${port}`);
});
