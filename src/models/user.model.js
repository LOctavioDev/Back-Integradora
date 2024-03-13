import mongoose, { model } from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true //ELIMINA LOS ESPACIOS EN BLANCO
    },

    password: {
        type: String,
        required: true,
        trim: true

    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },


}, {
    timestamps: true,
    versionKey:false
})



export default model('User', userSchema);