/**
 * Created by manel on 16/5/16.
 */
var mongoose = require('mongoose');
Schema = mongoose.Schema;

var mensajeSchema = new Schema({
    sendName: {type: String},
    recName: {type: String},
    mensaje: {type: String},
    fecha: {type: Date}
});

module.exports = mongoose.model('Mensaje', mensajeSchema);