const mongoose = require("mongoose")

const { Schema } = mongoose
const option = {
    timestamps:true
}

const ReparationSchema = new Schema(
    {
        typeREP: {
            type: String,
            required: true,
        },
        motifREP:{
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
        vehiculeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicule",
            required : true,
        }
    },
    option
)

const Reparation = mongoose.model("Reparation", ReparationSchema)

module.exports = Reparation