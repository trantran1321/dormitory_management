const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomType = new Schema({
    slug: {type: String, default: ""},
    roomTypeName: {type: String, default: ""},
    roomCapacity: {type: String, default: ""},
    genderUser: {type: String, default: ""},
    description: {type: String, default: ""},
    roomPrice: {type: Number, default: ""},
}, {
    collection: 'roomtypes',
})

module.exports = mongoose.model('roomtypes', RoomType)