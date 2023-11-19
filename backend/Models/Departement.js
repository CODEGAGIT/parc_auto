const mongoose = require("mongoose")

const { Schema } = mongoose

const DepartementSchema = new Schema(
    {
        nom: {
            type: String,
            unique: true,
            required: true,
        },
        service: {
            type: String,
            required: true,
        }
    },
)

const Departement = mongoose.model("Departement", DepartementSchema)

module.exports = Departement 