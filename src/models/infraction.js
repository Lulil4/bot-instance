const mongoose = require("mongoose");
const {model, Schema} = mongoose;

const infractionSchema = new Schema({
    dni:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        required: true, 
    },
});

module.exports = model("Infraction", infractionSchema); 