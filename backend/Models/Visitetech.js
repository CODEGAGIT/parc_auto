const mongoose = require("mongoose")

const { Schema } = mongoose
const option = {
    timestamps:true
}

const VisitetechSchema = new Schema(
    {
        validite:{
            type: Number,
            required: true,
        },
        datedebut:{
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

const Visitetech = mongoose.model("Visite technique", VisitetechSchema)

module.exports = Visitetech