const mongoose = require('mongoose')
const CheckInBill = require('./CheckInBill')
const Surcharge = require('./Surcharge')
const Schema = mongoose.Schema

const DetailCheckInBill = new Schema({
    checkinbillID: [CheckInBill],
    surcharge: [Surcharge],
    surchargeName: {type: String, default: ""},
    price: {type: Number},
}, {
    collection: 'detailcheckinbill',
})

module.exports = mongoose.model('detailcheckinbill', DetailCheckInBill)