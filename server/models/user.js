const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String, 
    password: String, 
    full_name: String
})

module.exports = mongoose.model("User", userSchema)