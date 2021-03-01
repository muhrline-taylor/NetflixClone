const Users = require("../models/users.model");

// GET ALL
module.exports.findAllUsers = (req, res) => {
    Users.find()
        .then(allUsers => res.json({users: allUsers}))
        .catch(err => res.json({message: "Something went wrong getting all users", error: err}))
}

// GET ONE
module.exports.findOneUser = (req, res) => {
    Users.findOne({_id: req.params._id})
        .then(oneUser => res.json({Users: oneUser}))
        .catch(err => res.json({message: "Something went wrong getting the user", error: err}))
}

// CREATE
module.exports.createOne = (req, res) => {
    Users.create(req.body)
        .then(addUser => res.json({Users: addUser}))
        .catch(err => res.json({message: "Something went wrong creating the user", error: err}))
}

// UPDATE
module.exports.updateOneUser = (req, res) => {
    Users.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneUser => res.json({Users: oneUser}))
        .catch(err => res.json({message: "Something went wrong updating the user", error: err}))
}

// DELETE ONE
module.exports.deleteOneUser = (req, res) => {
    Users.deleteOne()
        .then(res.json({message: "User deleted!"}))
        .catch(err => res.json({message: "Something went wrong deleting the user!", error: err}))
}