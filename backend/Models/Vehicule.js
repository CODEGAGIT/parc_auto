const mongoose = require("mongoose")

const { Schema } = mongoose

const VehiculeSchema = new Schema(
    {
        immatriculation: {
            type: String,
            required: true,
        },
        marqueId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Marque", 
            required: true,
        } ,
        model: {
            type: String,
            required: true,
        },
        chassis:{
            type: Number,
            required: true,
        },
        typeVEH:{
            type: String,
            required: true,
        },
        puissance:{
            type: Number,
            required: true,
        },
        moteur:{
            type: Number,
            required: true,
        },
        carburantId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Carburant",
            required: true,
        },
        dateacquisition:{
            type: Date,
            required: true,
        },
        datemisecirc:{
            type: Date,
            required: true,
        },
       /*  kilometrerev:{
            type: Number,
            required: true,
        }, 
        kilometrepneu:{
            type: Number,
            required: true,
        }, */
       
        departementId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Departement",
            required: true,
        }

        
        /* asssuranceId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Assurance",
        }, 
        visiteTechId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "VisiteTech",
        },
        reparationId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reparation",
        },
        entretienId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Entretien",
        },*/
       
    },
    
)

const Vehicule = mongoose.model("Vehicule", VehiculeSchema)

module.exports = Vehicule