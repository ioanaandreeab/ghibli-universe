const secret = process.env.TOKEN_SECRET;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const findUserByEmail = require("../services/users").findUserByEmail;
const db = require("../config/firebase");

const registerUser = async (req, res) => {
    let userFound = await findUserByEmail(req.body.email);

    if (userFound) {
        res.status(409).json({ message: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    let hashedPass = bcrypt.hashSync(req.body.password, salt);

    try {
        let user = {
            "email":req.body.email,
            "firstName":req.body.firstName,
            "lastName": req.body.lastName,
            "password": hashedPass
        };
        await db.collection("users").add(user);
        res.status(201).json({ message: "User created"});
    } catch (err) {
        console.log(err);
    }
};

const loginUser = async (req, res) => {
    let userFound = await findUserByEmail(req.body.email);

    if (!userFound) {
        res.status(404).json({ message: "No account for the email entered" });
    } else {
        const validPass = bcrypt.compareSync(req.body.password, userFound.password);
        if (!validPass) {
        res.status(400).json({ message: "Wrong password" });
        } else {
            const token = jwt.sign({ id: userFound.id }, secret, { expiresIn: "3h"});
            res.status(200).json({ userId: userFound.id, token: token, message: "Successful login" });
        }
    }
};

module.exports = {
    registerUser,
    loginUser
}