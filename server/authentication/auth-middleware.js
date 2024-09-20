require("dotenv").config();
const jwt = require("jsonwebtoken");

function verifyToken(req,res,next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // accounting for Bearer 

    if(!token){
        return res.json({message: "Error: Token is absent"})
    }

    try {
        const verified_result = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user_id = verified_result.id;
        next();

    } catch (err) {
        res.json({message: "Error: Invalid Token"})
    }
}

module.exports = verifyToken;