const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Surcharge = new Schema({
    slug: {type: String},
    surchargeName: {type: String, default: ""},
    price: {type: Number},
    description: {type: String, default: ""},
}, {
    collection: 'surcharge',
})

module.exports = mongoose.model('surcharge', Surcharge)