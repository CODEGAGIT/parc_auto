const mongoose = require("mongoose")

const { Schema } = mongoose
const option = {
    timestamps:true
}
const RoleSchema = new Schema(
    {
        libelle: {
            type: String,
            required: true,
        },

    },
    option
)
const Role = mongoose.model("Role", RoleSchema)

module.exports = Role