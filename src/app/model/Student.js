const mongoose = require('mongoose')
const Account = require('./Account')
const Room = require('./Room')
const Schema = mongoose.Schema

const Student = new Schema({
    slug: {
        type: String
    },
    studentName: {
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
    studentState: {
        type: String
    },
    relativeName: {
        type: String
    },
    relativeAddress: {
        type: String
    },
    account: {
        type: String,
    },
    roomName: {
        _id: String,
        room_name: String,
    },
}, {
    collection: 'student',
})

module.exports = mongoose.model('student', Student)