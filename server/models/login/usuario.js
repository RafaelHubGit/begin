const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
        type: String, 
        required: [true, 'El nombre es necesario']
    }, 
    email:{
        type: String, 
        required: [true, 'El correo es necesario']
    }, 
    password:{
        type: String,
        required: [true, 'La contraseña es obligatoria']
    }, 
    img:{
        type: String, 
        required: false
    }, 
    role: {
        default: 'USER_ROLE'
    }, 
    estado:{
        type: Boolean, 
        default: true
    },
    depende: {
        type: Boolean, 
        default: false
    },
    quienDepende: {
        type: String
    },
    google: {
        type: Boolean, 
        default: false
    }
});

module.exports = mongoose.model( 'Usuario', usuarioSchema );