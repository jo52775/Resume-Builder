const express = require('express')
const app = express()

const cors = require("cors")
app.use(cors())

app.use(express.json())

// **TODO: Need to access database with this endpoint to retrieve and verify user login credentials**
app.post("/login", (req,res) => {
    const username = req.body.username
    const password = req.body.password

    const tempUsername = "josh" // temporary username
    const tempPassword = "naraine" // temporary password

    if(username == tempUsername && password == tempPassword){
        res.send({"message": "login successful"})
    }
    else{
        res.send({"message": "login failed"})
    }
    })

app.listen(5000, () => {
    console.log("Server started on port 5000")
})