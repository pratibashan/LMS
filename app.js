const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const routes = require("./routes.js");

const PORT = process.env.PORT || 3000;

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

//init session
app.use(
  session({
    secret: "booksinfo",
    resave: false,
    saveUninitialized: false
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

//initialize routes
app.use(routes);

// error handling middleware
app.use(function(err, req, res, next) {
  //console.log(err)
  res.status(err.status || 500).json({
    status: "error",
    message: err.message
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
