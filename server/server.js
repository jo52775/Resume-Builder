const express = require('express')
const app = express()

const cors = require("cors")
app.use(cors())

app.get("/test", (req,res) => {
    res.json({"message": "Express.js API endpoint works!"})
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
})