const mongoose = require('mongoose');
const countriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    capital: {
        type: String,
        required: true
    },
    population: {
        type: Number
    },
    majorcities: {
        type: [String]
    }
})
const Countries = mongoose.model('Countries', countriesSchema);
module.exports = Countries;