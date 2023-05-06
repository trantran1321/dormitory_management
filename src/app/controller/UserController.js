// const Account = require('../model/Account')
const Employee = require('../model/Employee')
const Student = require('../model/Student')
const {multipleMongooseToObject} = require('../../util/mongoose')
class UserController {

    // [GET] /them-sinh-vien
    // createStudent(req, res) {
    //     res.render('createStudents')
    // }
    index(req, res) {
        
    }
    showEmployees(req, res, next) {
        Employee.find({ })
            .then(employee => res.render("employeeForm", {
                employee: mongooseToObject(employee),
                title: "Nhan vien",
                authuser: req.authuser,
            }))
            .catch(next)
    }
    showEmployee(req, res, next) {
        Employee.findOne({ username: req.user.username })
            .then(employee => res.render("employeeForm", {
                employee: mongooseToObject(employee),
                title: "Nhan vien",
                authuser: req.authuser,
            }))
            .catch(next)
    }
    addEmployee(req, res) {
        res.render('addAccount', {
            title: "Them nhan vien",
            authuser: req.authuser,
        })
    }
    saveEmployee(req, res, next) {
        const formData = req.body
        const account = new Account(formData)
        account.save()
            .then(() => res.json("Dang ki thanh cong"))
            .catch(next)
    }

    showStudents(req, res, next) {
        Student.find({ })
            .then(employee => res.render("employeeForm", {
                employee: mongooseToObject(employee),
                title: "Nhan vien",
                authuser: req.authuser,
            }))
            .catch(next)
    }
    showStudent(req, res, next) {
        Student.findOne({ username: req.user.username })
            .then(employee => res.render("employeeForm", {
                employee: mongooseToObject(employee),
                title: "Nhan vien",
                authuser: req.authuser,
            }))
            .catch(next)
    }
    addStudent(req, res) {
        res.render('addAccount', {
            title: "Them nhan vien",
            authuser: req.authuser,
        })
    }
    saveStudent(req, res, next) {
        const formData = req.body
        const account = new Account(formData)
        Student.save()
            .then(() => res.json("Dang ki thanh cong"))
            .catch(next)
    }
}

module.exports = new UserController;