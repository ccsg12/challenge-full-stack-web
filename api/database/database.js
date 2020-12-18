var Sequelize = require("sequelize");

var connection = new Sequelize("apidegerenciamento", "root", "171297Caio!", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
