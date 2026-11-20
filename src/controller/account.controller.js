const accountModel = require("../models/account.model");

/**
 * - User create an account controller
 * - API: POST /api/auth/accounts
 */

async function createAccountController(req, res) {
    const user = req.user;

    const account = await accountModel.create({
        user: user._id
    })

    res.status(201).json({
        account
    })
}

module.exports = {
    createAccountController
}