const mongoose = require("mongoose")

const { Schema } = mongoose
const option = {
    timestamps:true
}

const EntretienSchema = new Schema(
    {
        typeENT: {
            type: String,
            required: true,
        },
        motifENT: {
            type: String,
            required: true,
        },
        montant: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        vehiculeId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicule",
        }
    },
    option
)

const Entretien = mongoose.model("Entretien", EntretienSchema)

module.exports = Entretien