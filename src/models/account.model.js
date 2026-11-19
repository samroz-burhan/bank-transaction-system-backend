const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "Account must be associated with the user"]
    },
    status: {
        enum: ["ACTIVE", "FROZEN", "CLOSED"],
        message: "Status can either be active, frozen or closed"
    },
    currency: {
        type: String,
        required: [true, "Currency is required for creating an account"],
        default: "PKR"
    }
}, {
    timestamps: true
})

const accountModel = mongoose.model("account", accountSchema);

module.exports = accountModel