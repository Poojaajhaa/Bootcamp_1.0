const jwt = require("jsonwebtoken");

function authMiddleware(req , res , next){
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(403).send({
            message : " you are not logged in "
        });
        return;
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    const decode = jwt.verify(token, "123456");
    const username = decode.username;

    if(!username){
        res.status(403).json({
            message : " maformed token "
        });
        return;
    }

    req.username = username;
    next();
}

module.exports = authMiddleware ;
