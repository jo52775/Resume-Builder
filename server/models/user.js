const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String, 
    password: String, 
    full_name: String,
    resumes: [{type: mongoose.Schema.Types.ObjectId, ref: "Resume"}]
})

module.exports = mongoose.model("User", userSchema)