const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
    //Datos
    semanas: String,
    lecherec: String,
    brix: String,
    terneras: String,
    pasteurizadoras: String,
    pastleche: String,
    pastbrix: String,
    pastsustituto: String,
    cicloid: String,
    cicloarchivo: String,


});

module.exports= mongoose.model('Data', Data);
