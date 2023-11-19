const mongoose = require("mongoose")

const { Schema } = mongoose
const option = {
    timestamps : true
}

const AssuranceSchema = new Schema(
    {
        nom: {
            type: String,
            required: true,
        },
        typeASS: {
            type: String,
            required: true,
        },
        compagnie: {
            type: String,
            required: true,
        },
        validite:{
            type: Number,
            required: true,
        },
        datedebut:{
            type: Date,
            required: true,
        }
    },
    option
)

const Assurance = mongoose.model("Assurance", AssuranceSchema)

module.exports = Assurance