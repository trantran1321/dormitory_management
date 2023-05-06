const mongoose = require('mongoose')
const Student = require('./Student')
const Employee = require('./Employee')
const Schema = mongoose.Schema

const CheckInBill = new Schema({
    billDate: {type: Date, default: Date.now},
    description: {type: String, default: ""},
    studentID: [Student],
    employeeID: [Employee],
}, {
    collection: 'checkinbill',
})

module.exports = mongoose.model('checkinbill', CheckInBill)