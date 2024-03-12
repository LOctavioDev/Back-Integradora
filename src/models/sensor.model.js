import { model, Schema } from "mongoose";

const sensorSchema = new Schema({
    type : String, 
    name : String,
    brand : String,
    model : String,
    specifications : [],
    location : String,
    status : String,
    initialDate: {
        type: Date,
        default: "2024-03-11T16:25:00.000Z", // Valor predeterminado
        required: false // Campo no obligatorio
    },
    owner : String,
    startsAt: {
        type: Date,
        default: Date.now,
        required: false // Campo no obligatorio
    },
    endsAt: {
        type: Date,
        default: () => new Date(Date.now() + 5000), // Dependiendo del delay que se asignrara
        required: false // Campo no obligatorio
    },
    readings : []
},{
    timestamps: false,
    versionKey: false
})  

export default model('Sensor', sensorSchema);