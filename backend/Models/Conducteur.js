const mongoose = require("mongoose")

const { Schema } = mongoose

const ConducteurSchema = new Schema(
    {
        nom: {
            type: String,
            required: true,
        },
        categorie: {
            type: String,
            required: true,
        },
        addresse: {
            type: String,
            required: true,
        },
        contact: {
            type: Number,
            required: true,
        },
        vehiculeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicule",
        }
        
    },
    
)



const Conducteur = mongoose.model("Conducteur", ConducteurSchema)

module.exports = Conducteur