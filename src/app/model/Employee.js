const mongoose = require('mongoose')
// const Account = require('./Account').Schema
const Schema = mongoose.Schema

const Employee = new Schema({
    _id: {
        type: Number
    },
    slug: {
        type: String
    },
    employeeName: {
        type: String, 
        default: "",
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    birthday: {
        type: Date
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    account: {
        main: String,
    }
}, {
    _id: false,
    collection: 'employee',
})

module.exports = mongoose.model('employee', Employee, 'employee')