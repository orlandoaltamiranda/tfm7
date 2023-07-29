const { Sequelize } = require("sequelize")
const { sequelize } = new Sequelize("db_bootcamp", "postgres", "postgres", {
  host: "localhost",
  port: 5432,
  dialect: "postgres"
})

module.exports = sequelize
