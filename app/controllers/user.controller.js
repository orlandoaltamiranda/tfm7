const db = require("../models/index")
const User = db.users
const Bootcamp = db.bootcamps

// Metodo: Crear y guardar usuarios llamado createUser.
exports.createUser = async (user) => {
  try {
    const dataUser = await User.create(user)
    return dataUser
  } catch (error) {
    console.log("Error al registrar nuevo usuario", error)
    return null
  }

}

exports.findUserById = async (idUser) => {
  try {
    const user = await User.findByPk(idUser, {
      include: [
        {
          model: Bootcamp,
          as: "bootcamps"
        }
      ]
    })
    return user
  } catch (error) {
    console.log("Error usuario no existe", error)
    return null
  }
}

exports.findAll = async () => {
  try {
    const data = await User.findAll({
      include: [
        {
          model: Bootcamp,
          as: "bootcamps"
        }
      ]
    })
    return data
  } catch (error) {
    console.log("Error no existen registros", error)
    return null
  }
}

exports.updateUserById = async ( firstName, lastName, email, id) => {
  try {
    const userUpdate = await User.update({
      firstName: firstName,
      lastName: lastName,
      email: email
    },
      {
        where: {id: id},
      }
    )
    return userUpdate
  } catch (error) {
    console.log("Error usuario no existe", error)
    return null
  }
}

exports.deleteUserById = async ( id ) => {
  try {
    const userDelete = await User.destroy({ where: { id: id } });
    return userDelete
  } catch (error) {
    console.log("Error usuario no existe", error)
    return null
  }
}
