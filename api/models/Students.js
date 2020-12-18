var Sequelize = require("sequelize");
var connection = require("../database/database");

var Students = connection.define("students", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Utilizar somente uma vez para criar a tabela
// Students.sync({ force: true });

module.exports = Students;
