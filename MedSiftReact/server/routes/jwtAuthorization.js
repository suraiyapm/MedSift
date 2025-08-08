import jwt from "jsonwebtoken";

export const jwtAuthorization = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    console.log(token);
    if(!token){
        return res.status(401).send({ success: false, message: "Access denied"});
    }
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if(error){
            return res.status(403).send({ success: false, message: "Invalid token"});
        }
        req.user = user;
        next();
    })

}

