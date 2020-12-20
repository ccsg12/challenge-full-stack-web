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
  ra: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Students.sync({ force: false });

module.exports = Students;
