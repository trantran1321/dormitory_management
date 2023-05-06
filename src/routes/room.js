const express = require('express')
const router = express.Router()

const roomController = require('../app/controller/RoomController')

router.use('/xem-chi-tiet-phong/:slug', roomController.showDetail)
router.use('/danh-sach-phong', roomController.show)
// router.use('/them-sinh-vien', studentsController.createStudent)
// router.use('/luu-sinh-vien', studentsController.saveStudent)

module.exports = router

