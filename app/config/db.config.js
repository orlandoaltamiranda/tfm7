const { Sequelize } = require("sequelize")
const { sequelize } = new Sequelize("db_bootcamp", "orlando", "holahola", {
  host: "localhost",
  port: 5432,
  dialect: "postgres"
})

module.exports = sequelize
