var Account = require('../app/model/Account')
var LocalStrategy = require('passport-local').Strategy
var bcrypt = require('bcryptjs')
function passport() {
    passport.serializeUser(function(acc, done) {
        done(null, acc._id);
    })

    passport.deserializeUser(function(id, done) {
        Account.findOne({
        _id: id
        })
        .then(function(acc) {
            done(null, acc)
        })
        .catch(function(err) {
            console.log(err)
        });
    });

    passport.use('local-signin', new LocalStrategy(function(username, password, done) {
        console.log("Chua Xong")
        Account.findOne({ username: username }, function(err, acc) {
            if (err) {
                return done(err)
            }
            if (!acc) {
                return done(null, false, {
                    message: 'Sai tên đăng nhập hoặc mật khẩu.'
                })
            }

            bcrypt.compare(password, acc.password, function(err, result) {
                if (err) {
                    return done(err)
                }
                console.log('acc : ' + acc.username + ' ' + acc.password + ' ' + password, result);
                if (!result) {
                    return done(null, false, {
                    message: 'Sai tên đăng nhập hoặc mật khẩu.'
                    })
                }
                return done(null, acc)
            })
        })
        console.log("Xong")
    }))
}
module.exports = {passport}