const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

/**
 * - User register controller
 * - API: POST /api/auth/register
 */

async function registerUserController (req, res) {
    const { email, password, name } = req.body;

    const isExists = await userModel.findOne({ email })

    if(isExists){
        return res.status(422).json({
            message: "User already exists with email",
            status: "failed"
        })
    }

    const user = userModel.create({
        name,
        email,
        password
    })

}

module.exports = {
    registerUserController
}