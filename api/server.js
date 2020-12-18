const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./database/database");

const app = express();

//controller
const studentsController = require("./controllers/StudentsController");

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

app.use("/", studentsController);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
