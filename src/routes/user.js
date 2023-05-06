const express = require('express')
const router = express.Router()

const userController = require('../app/controller/UserController')

router.get('/danh-sach-nhan-vien', userController.showEmployees)
router.get('/them-nhan-vien', userController.addEmployee)
router.post('/luu-nhan-vien', userController.saveEmployee)

router.get('/danh-sach-sinh-vien', userController.showStudents)
router.get('/them-sinh-vien', userController.addStudent)
router.post('/luu-sinh-vien', userController.saveStudent)
// router.post('/dang-nhap-tai-khoan', userController.loginAccount)
// router.use('/tai-khoan', userController.show)
router.get('/', userController.index)


module.exports = router