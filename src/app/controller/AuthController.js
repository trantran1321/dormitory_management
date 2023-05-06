const Account = require('../model/Account')
// const Employee = require('../model/Employee')
// const Student = require('../model/Student')
const {multipleMongooseToObject} = require('../../util/mongoose')
const passport = require('passport')

class AuthController {

    show(req, res, next) {
        Account.find({})
            .then(account => res.render("account", {
                account: multipleMongooseToObject(account),
                title: "Danh sach tai khoan",
                authuser: req.authuser,
            }))
            .catch(next)
    }
    createAccount(req, res) {
        res.render('addAccount', {
            
            title: "Tao tai khoan",
            authuser: req.authuser,
        })
    }
    saveAccount(req, res, next) {
        // const email = req.body.email
        // const password = req.body.password
        // const type = req.body.role
        // var role
        // const user = req.body.authuser
        // if (type == "Admin") {
        //     role = 0
        // }else if (type == "Nhân viên") {
        //     role = 1
        // }
        // else {
        //     role = 2
        // }
        // Account.findOne({
        //     email: email
        // })
        // .then(data => {
        //     if(data) {
        //         res.json('Email đã tồn tại!')
        //     } else {
        //         return Account.create({
        //             email: email,
        //             password: password,
        //             role: role,
        //         })
        //     }
        // })
        // .then(data => {
        //     res.render("account")
        // })
        // .catch(err => {
        //     res.status(500).json('Tao tai khoan that bai')
        // })
        if (req.body.email && req.body.password) {
        
            var userData = {
              email: req.body.email,
              password: req.body.password,
            }
        
            Account.create(userData, function (error, acc) {
              if (error) {
                return next(error);
              } else {
                req.session.userId = acc._id;
                return res.redirect('/dang-ky-hoan-tat');
              }
            });
        
          } else {
            var err = new Error('All fields required.');
            err.status = 400;
            return next(err);
          }
    }
    login(req, res) {
        res.render('login', {
            title: "Đăng nhập",
            user: req.user,
        })
        
    }
    loginAccount(req, res, next) {
        if (req.body.email && req.body.password) {
            var userData = {
                email: req.body.email,
                password: req.body.password,
              }
              Account.authenticate(userData, function (error, acc) {
                if (error || !acc) {
                    var err = new Error('Wrong email or password.');
                    err.status = 401;
                    return next(err);
                } else {
                    req.session.userId = acc._id;
                    return res.redirect('/', {
                        user: req.session.userId,
                });
                }
            })
        }
        else {
            var err = new Error('All fields required.');
            err.status = 400;
            return next(err);
        }
    }
    logoutAccount(req, res, next) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
              if (err) {
                return next(err);
              } else {
                return res.redirect('/');
              }
            });
          }
    }
}

module.exports = new AuthController;