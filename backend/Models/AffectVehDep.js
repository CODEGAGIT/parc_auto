const mongoose = require("mongoose")

const { Schema } = mongoose 
const option = {
    timestamps:true
}
const AffectSchema = new Schema(
    {
        numero:{
            type:Number,
            required: true,
        },
        vehiculeimmatriculation:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicule",
        },
        departementnom:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Departement",
        }
    },
    option
)

const Affect = mongoose.model("Affect", AffectSchema)

module.exports = Affect