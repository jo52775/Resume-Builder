const mongoose = require("mongoose")

const resumeSchema = new mongoose.Schema({
    contactFormData: {
        firstName: String,
        lastName: String,
        city: String,
        phoneNumber: String,
        email: String,
        link: String
    },

    summaryFormData: String, 

    educationFormData: {
        institutionName: String,
        major: String,
        startDate: String,
        endDate: String,
        location: String, 
        description: String
      },

      experienceFormData: {
        companyName: String,
        positionTitle: String,
        keyResponsibilities: String,
        startDate: String,
        endDate: String,
        city: String
      },

      projectsFormData: {
        projectType: String,
        name: String,
        description: String,
        startDate: String,
        endDate: String
      },

      skillsFormData: [String],

      documentTitle: String,

      user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Resume", resumeSchema)