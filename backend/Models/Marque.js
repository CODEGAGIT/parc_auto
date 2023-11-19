const mongoose = require("mongoose")

const { Schema } = mongoose 

const MarqueSchema = new Schema(
    {
        nom: {
            type: String,
            required: true,
        }
    },
)

const Marque = mongoose.model("Marque", MarqueSchema)

module.exports = Marque