const db = require("../models/index")
const Bootcamp = db.bootcamps
const User = db.users

// Metodo: Crear y guardar un nuevo Bootcamp llamado createBootcamp
exports.createBootcamp = async (bootcamp) => {
  try {
    const dataBootcamp = await Bootcamp.create(bootcamp)
    return dataBootcamp
  } catch (error) {
    console.log("Error al registrar nuevo usuario", error)
    return null
  }

}

// Metodo: Agregar un Usuario al Bootcamp llamado addUser.
exports.addUser = async (idUser, idBootcamp) => {
  try {
    const user = await User.findByPk(idUser)
    console.log("aqui" +user)
    if(!user){
      console.log("Usuario no existe")
      return null
    }
    const bootcamp = await Bootcamp.findByPk(idBootcamp)
    if(!bootcamp){
      console.log("Bootcamp no existe")
      return null
    }

    await bootcamp.addUser(user)
    console.log("Participante añadido al bootcamp")
    return bootcamp
  } catch (error) {
    console.log("Hay un error")
  }

}

// Metodo: Obtener los Bootcamp por id llamado findById
exports.findById = async (idBootcamp) => {
  try {
    const bootcamp = await Bootcamp.findByPk(idBootcamp ,{
      include: [
        {
          model: User,
          as: "users"
        }
      ]
    })
    return bootcamp
  } catch (error) {
    console.log("Error usuario no existe", error)
    return null
  }
}

// Metodo: Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll
exports.findAll = async () => {
  try {
    const data = await Bootcamp.findAll({
      include: [
        {
          model: User,
          as: "users"
        }
      ]
    })
    return data
  } catch (error) {
    console.log("Error no existen registros", error)
    return null
  }
}
