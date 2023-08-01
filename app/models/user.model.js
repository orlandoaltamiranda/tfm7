/*
Los atributos para el usuario son:
• firstName: cadena de caracteres y campo obligatorio.
• lastName: cadena de caracteres y campo obligatorio.
• email: campo obligatorio, y con las siguientes validaciones: formato de correo y que sea
único, no repetitivo en la base de datos
*/

const Sequelize = require("sequelize")
const db = require("../config/db.config")

const User = db.define("users", {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: {
      msg: 'El email necesita ser unico'
    },
    validate: {
    isEmail: true
    }
  }

})

module.exports = User
