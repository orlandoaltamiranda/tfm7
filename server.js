const db = require("./app/models/index")

const main = async() => {
  console.log("Ejecutando aplicacion")

}

db.dbConfig.sync().then(() => {
  console.log("BD sincronizada");
  main()
})
