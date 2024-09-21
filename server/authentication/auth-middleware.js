require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

function verifyToken(req,res,next){
    const token = req.cookies.tokenCookie;

    if(!token){
        return res.json({message: "Error: Token is absent"});
    }

    try {
        const verified_result = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user_id = verified_result.id;
        next();

    } catch (err) {
        res.clearCookie("tokenCookie");
        res.json({message: "Error: Invalid Token"});
        // redirect to login or show login modal
    }
}

module.exports = verifyToken;