var Sequelize = require("sequelize");

var connection = new Sequelize("apidegerenciamento", "root", "171297Caio!", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
