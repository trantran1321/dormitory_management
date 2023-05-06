const mongoose = require('mongoose')
const RoomType = require('./RoomType').schema
const Schema = mongoose.Schema

const Room = new Schema({
    slug: {type: String, slug: "roomName"},
    roomName: {type: String, default: ""},
    electricity: {type: Number, default: ""},
    water: {type: Number, default: ""},
    roomType: {
        roomType_name: String,
    },
    studentNumberInRoom: {type: Number, default: ""},

}, {
    collection: 'room',
})

module.exports = mongoose.model('room', Room)