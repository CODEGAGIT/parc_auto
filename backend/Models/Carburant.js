const mongoose = require("mongoose")

const { Schema } = mongoose

const CarburantSchema = new Schema(
    {
        typeCAR: {
            type: String,
            required: true,
        },
        qte: {
            type: Number,
            required: true,
        }
    },
)

const Carburant = mongoose.model("Carburant", CarburantSchema)

module.exports = Carburant