const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./database/database");

const app = express();

//database
connection
  .authenticate()
  .then(() => {
    console.log("Conexao estabelecida com sucesso");
  })
  .catch((err) => {
    console.log(err);
  });

//cors
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
