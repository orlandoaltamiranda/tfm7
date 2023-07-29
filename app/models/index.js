const db = {
  users: require("./user.model"),
  bootcamps: require("./bootcamp.model")
}

db.users.belongsToMany(db.bootcamps, {
  through: "user_bootcamp",
  as: "users",
  foreignKey: "user_id"
})

db.bootcamps.belongsToMany(db.users, {
  through: "user_bootcamp",
  as: "bootcamps",
  foreignKey: "bootcamp_id"
})
