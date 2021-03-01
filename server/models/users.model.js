const mongoose = require("mongoose");

    const Schema = mongoose.Schema;
    
    const UsersSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, "Must have a username"]
        },
        fname: {
            type: String,
            required: [true, "Must have a name"]
        },
        email: {
            type: String,
            required: [true, "Enter a valid email"]
        },
        password: {
            type: String,
            required: [true, "Enter a password"],
            minlength: [8, "Password must be at least 8 characters"]
        },
        dob: {
            type: String,
            required: [true, "Birth Date is required"]
        }
    }, {timestamps: true})

    const Users = mongoose.model("Users", UsersSchema)

module.exports = Users;