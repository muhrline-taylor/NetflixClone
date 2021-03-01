const UsersController = require("../controllers/users.controller");

module.exports = app => {
    // GET ALL
    app.get("/api/users", UsersController.findAllUsers)
    // GET ONE
    app.get("/api/users/:_id", UsersController.findOneUser)
    // CREATE ONE
    app.post("/api/users/new", UsersController.createOne)
    // UPDATE ONE
    app.put("/api/users/update/:_id", UsersController.updateOneUser)
    // DELETE ONE
    app.delete("/api/users/delete/:_id", UsersController.deleteOneUser)
}