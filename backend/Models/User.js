const mongoose = require("mongoose")

const { Schema } = mongoose

const UserSchema = new Schema(
    {
        nom: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        roleId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
            required: true,

        },
        password: {
            type: String,
            required: true,
        },

        

    },
    
)

const User = mongoose.model("User", UserSchema)

module.exports = User