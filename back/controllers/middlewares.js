const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_SECRET;

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ message: "Not authorized" });
    }

    const trimmedToken = token.split(" ")[1];
    jwt.verify(trimmedToken, secret,
        function (err, decoded) {
            if (err) {
                return res.status(403).send({ message: "Forbidden", err: err });
            } else {
                req.user = decoded;
                next();
            }
        }
    );
};

module.exports = {verifyToken};