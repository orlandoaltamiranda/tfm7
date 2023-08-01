const db = require("./app/models/index")
const userController = require("./app/controllers/user.controller")
const bootcampController = require("./app/controllers/bootcamp.controller")

const main = async () => {
  console.log("Ejecutando aplicacion")

  // //*** PASO 1 *** Crear los siguientes usuarios:
  // const participante1 = await userController.createUser({
  //     firstName: "Mateo",
  //     lastName: "Díaz",
  //     email: "mateo.diaz@correo.com"
  //   })

  // const participante2 = await userController.createUser({
  //   firstName: "Santiago",
  //   lastName: "Mejías",
  //   email: "santiago.mejias@correo.com"
  // })

  // const participante3 = await userController.createUser({
  //   firstName: "Lucas",
  //   lastName: "Rojas",
  //   email: "lucas.rojas@correo.com"
  // })

  // const participante4 = await userController.createUser({
  //   firstName: "Facundo",
  //   lastName: "Fernandez",
  //   email: "facundo.fernandez@correo.com"
  // })



  // //*** PASO 2 *** Crear los siguientes Bootcamp:
  // const bootcamp1 = await bootcampController.createBootcamp({
  //   title: "Introduciendo El Bootcamp De React.",
  //   cue: 10,
  //   description: "React es la librería más usada en JavaScript para el desarrollo de interfaces."
  // })

  // const bootcamp2 = await bootcampController.createBootcamp({
  //   title: "Bootcamp Desarrollo Web Full Stack.",
  //   cue: 12,
  //   description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS."
  // })

  // const bootcamp3 = await bootcampController.createBootcamp({
  //   title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning.",
  //   cue: 18,
  //   description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning."
  // })



  // //*** PASO 3 *** Agregar los siguientes usuarios al Bootcamp:
  // //Agregar a Mateo y Santiago a Bootcamp de React
  // const addUserToBootcamp1 = await bootcampController.addUser(1,1)
  // const addUserToBootcamp2 = await bootcampController.addUser(2,1)

  // //Agregar a Mateo a Bootcamp de FullStack
  // const addUserToBootcamp3 = await bootcampController.addUser(1,2)

  // //Agregar a Mateo, Santiago y Lucas a Bootcamp de Big Data
  // const addUserToBootcamp4 = await bootcampController.addUser(1,3)
  // const addUserToBootcamp5 = await bootcampController.addUser(2,3)
  // const addUserToBootcamp6 = await bootcampController.addUser(3,3)



  // //*** PASO 4 *** Realizar las siguientes consultas:
  // // Consultando el Bootcamp por id, incluyendo los usuarios
  // const bootcamp1 = await bootcampController.findById(1)
  // console.log("Datos son:", JSON.stringify(bootcamp1, null, 4))

  // const bootcamp2 = await bootcampController.findById(2)
  // console.log("Datos son:", JSON.stringify(bootcamp2, null, 4))

  // const bootcamp3 = await bootcampController.findById(3)
  // console.log("Datos son:", JSON.stringify(bootcamp3, null, 4))



  //  //Listar todos los Bootcamp con sus usuarios
  // const bootcamp1 = await bootcampController.findAll()
  // console.log("Datos son:", JSON.stringify(bootcamp1, null, 4))



  //  //Consultar un usuario por id, incluyendo los Bootcamp
  // const find1 = await userController.findUserById(2)
  // console.log("Datos son:", JSON.stringify(find1, null, 4))



  //  //Listar los usuarios con sus Bootcamp
  // const findAll = await userController.findAll()
  // console.log("Datos son:", JSON.stringify(findAll, null, 4))


  //  //Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez
  // const updateUser = await userController.updateUserById(
  //   "Pedro",
  //   "Sánchez",
  //   "pedro.sanchez@correo.com",
  //   1
  // )



  //  //Eliminar un usuario por id; por ejemplo: el usuario con id=1.
  // const deleteUser = await userController.deleteUserById(1)
  // console.log("Datos son:", JSON.stringify(deleteUser, null, 4))

  console.log("Proceso completado")
}

db.dbConfig.sync().then(() => {
  console.log("BD sincronizada");
  main()
})
