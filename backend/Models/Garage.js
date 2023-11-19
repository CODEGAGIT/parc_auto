const mongoose = require('mongoose')

const {Schema} = mongoose

const GarageSchema = new Schema(
    {
        nom: {
            type: String,
            required: true,
        },
        typeGAR: {
            type: String,
            required: true,
        },
        addresse: {
            type: String,
            required: true,
        },
        contact:{
            type: Number,
            required: true,
        }
    },
)

const Garage = mongoose.model("Garage", GarageSchema)

module.exports = Garage 