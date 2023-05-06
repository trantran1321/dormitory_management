const Rooms = require('../model/Room')
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class RoomController {

    // [GET] /danh-sach
    show(req, res, next) {
        Rooms.find({})
            .then(rooms => res.render("rooms", {
                rooms: multipleMongooseToObject(rooms),
                // roomType: rooms.roomType,
                title: "Danh sach phong",
                authuser: req.authuser,
            }))
            .catch(next)
    }
    // [GET] /:slug
    showDetail(req, res, next) {
        Rooms.findOne({ slug: req.params.slug })
            .then(room => res.render('roomDetail', {
                room: mongooseToObject(room),
                title: "Chi tiet phong",
                authuser: req.authuser,
            }))
            .catch(next)
    }
}

module.exports = new RoomController;