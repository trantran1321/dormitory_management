const express = require('express')
const router = express.Router()

const authController = require('../app/controller/AuthController')

router.get('/dang-ky', authController.createAccount)
router.post('/tao-tai-khoan-admin', authController.saveAccount)
router.get('/dang-nhap', authController.login)
router.post('/dang-nhap-tai-khoan', authController.loginAccount)
router.get('/tai-khoan', authController.show)
router.get('/dang-xuat', authController.logoutAccount)

// router.get('/api/tai-khoan', authController.apishow)
// router.post('/api/tao-tai-khoan', authController.apisaveacc)
// router.post('/api/dang-nhap-tai-khoan', authController.apilogin)

module.exports = router